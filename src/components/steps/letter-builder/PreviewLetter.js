import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {LetterBuilderSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {previousStep} from "../StepFunctions";
import {getLetter} from "./letterTemplate";
import FlexContainer from "../../FlexContainer";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignaturePad from 'react-signature-canvas'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import "./signature.css";
import * as ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

export default function PreviewLetter({state, setState, renterInfo, landlordInfo}) {
    const {t} = useTranslation();
    useEffect(() => ReactGA.pageview('preview/download letter page'), []);
    const [openSignForm, setOpenSignForm] = useState(false);
    const [imageUrl, setImageUrl] = useState("/renters-help/transparent.png");
    const signaturePad = useRef({});
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    if (state.currentStep !== LetterBuilderSteps.PREVIEW_LETTER) {
        return null
    }

    const letter = getLetter(renterInfo, landlordInfo, imageUrl);

    const handleSignFormOpen = () => {
        setOpenSignForm(true);
    }

    const handleSignFormClose = () => {
        setOpenSignForm(false);
    }

    const handleSignFormClear = () => {
        signaturePad.current.clear();
    }

    const handleSignFormSave = () => {
        setImageUrl(signaturePad.current.getTrimmedCanvas().toDataURL("image/png"));
        setOpenSignForm(false);
    }

    return (
        <>
            <Dialog open={openSignForm} onClose={handleSignFormClose} maxWidth={'md'} fullScreen={fullScreen} aria-labelledby={t('signForm')}>
                <DialogTitle>{t('signForm')}</DialogTitle>
                <DialogContent>
                    <FlexContainer justifyContent={'center'}>
                        <SignaturePad ref={signaturePad} canvasProps={{className: "signatureCanvas"}}
                                      clearOnResize={false}/>
                    </FlexContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSignFormClose} variant='contained'>{t('close')}</Button>
                    <Button onClick={handleSignFormClear} variant='contained'>{t('clear')}</Button>
                    <Button onClick={handleSignFormSave} variant='contained' color={'primary'}>{t('save')}</Button>
                </DialogActions>
            </Dialog>

            <Typography variant='h4' component='h1' className='title'>
                {t('previewTitle')}
            </Typography>
            <Typography variant='body1'>
                {t('previewBody')}
            </Typography>
            <FormControl fullWidth>
                <PDFViewer height={600} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
                    {letter}
                </PDFViewer>
            </FormControl>
            <FlexContainer justifyContent={'center'} margin={10}>
                <Button variant='contained' style={{marginRight: '20px'}}
                        onClick={() => previousStep(state, setState)}>{t('previous')}</Button>
                <Button variant='contained' onClick={handleSignFormOpen}>{t('signForm')}</Button>
            </FlexContainer>
            <FlexContainer justifyContent={'center'} margin={10}>
                <PDFDownloadLink style={{textDecoration: 'none'}} document={letter}
                                 fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
                    <Button variant='contained' color='primary' onClick={() => ReactGA.modalview('letter download button clicked')}>
                        {t('download')}
                    </Button>
                </PDFDownloadLink>
            </FlexContainer>
        </>
    )
}

PreviewLetter.propTypes = {
    currentStep: PropTypes.number,
}
