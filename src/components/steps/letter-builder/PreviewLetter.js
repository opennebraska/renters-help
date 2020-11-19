import React, {useRef, useState} from 'react';
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
import "./signature.css";

export default function PreviewLetter({state, setState, renterInfo, landlordInfo}) {
  const [openSignForm, setOpenSignForm] = useState(false);
  const [imageUrl, setImageUrl] = useState("/renters-help/transparent.png");
  const signaturePad = useRef({});

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
        <Dialog open={openSignForm} onClose={handleSignFormClose} maxWidth={'md'} aria-labelledby="Sign Form">
          <DialogTitle>Sign Form</DialogTitle>
          <DialogContent>
            <SignaturePad ref={signaturePad} canvasProps={{className: "signatureCanvas"}} clearOnResize={false}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSignFormClose} variant='contained'>Close</Button>
            <Button onClick={handleSignFormClear} variant='contained'>Clear</Button>
            <Button onClick={handleSignFormSave} variant='contained' color={'primary'}>Save</Button>
          </DialogActions>
        </Dialog>

        <Typography variant='h4' component='h1' className='title'>
          Preview your ready to send letter
        </Typography>
        <Typography variant='body1'>
          We created a form with all your information, please check and make sure it looks correct.
        </Typography>
        <FormControl fullWidth>
          <PDFViewer height={800} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
            {letter}
          </PDFViewer>
        </FormControl>
        <FlexContainer justifyContent={'center'} margin={10}>
          <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
          <Button variant='contained' style={{marginRight: '20px'}} onClick={handleSignFormOpen}>Sign Form</Button>
          <PDFDownloadLink style={{textDecoration: 'none'}} document={letter} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
            <Button variant='contained' color='primary'> Download </Button>
          </PDFDownloadLink>
        </FlexContainer>
      </>
  )
}

PreviewLetter.propTypes = {
  currentStep: PropTypes.number,
}
