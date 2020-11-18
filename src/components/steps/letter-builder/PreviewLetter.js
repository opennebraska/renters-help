import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {previousStep} from "../StepFunctions";
import {getLetter} from "./letterTemplate";
import FlexContainer from "../../FlexContainer";
import {PDFViewer, PDFDownloadLink} from "@react-pdf/renderer";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
    formControl: {
        marginBottom: '1em'
    }
}));


export default function PreviewLetter({state, setState, renterInfo, landlordInfo}) {

    const classes = useStyles();

        if (state.currentStep !== LetterBuilderSteps.PREVIEW_LETTER) {
            return null
        }

        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
                Preview your ready to send letter
            </Typography>
            <Typography variant='body1'>
                We created a form with all your information, please check and make sure it looks correct.
            </Typography>
            <FormControl component="fieldset" className={classes.formControl} fullWidth>
                <PDFViewer height={400} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
                    {getLetter(renterInfo, landlordInfo)}
                </PDFViewer>
            </FormControl>
            <FlexContainer justifyContent={'center'}>
                <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
                <PDFDownloadLink document={getLetter(renterInfo, landlordInfo)} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
                    Download
                </PDFDownloadLink>
            </FlexContainer>
        </React.Fragment>)
}

PreviewLetter.propTypes = {
    currentStep: PropTypes.number,
}
