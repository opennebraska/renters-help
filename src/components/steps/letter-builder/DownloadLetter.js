import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {LetterBuilderSteps} from "../StepNames";
import {previousStep} from "../StepFunctions";
import FlexContainer from "../../FlexContainer";

export default function DownloadLetter({state, setState}) {

    if (state.currentStep !== LetterBuilderSteps.DOWNLOAD_LETTER) {
        return null
    }

    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>
            Download your letter to send to your landlord
        </Typography>
        <Button variant="contained" color="primary">Download complete form</Button>
        <Typography>Check out https://www.npmjs.com/package/pdfkit </Typography>
        <FlexContainer justifyContent={'center'}>
            <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
        </FlexContainer>
    </React.Fragment>)
}

DownloadLetter.propTypes = {
    currentStep: PropTypes.number,
}
