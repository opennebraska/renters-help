import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {LetterBuilderSteps} from "../StepNames";
import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "../StepFunctions";
import FlexContainer from "../../FlexContainer";

export default function Signature({state, setState}) {

        if (state.currentStep !== LetterBuilderSteps.SIGNATURE) {
            return null
        }

        return (<React.Fragment>
            <Typography variant='h4' component='h1' className='title'>
                Please sign the form
            </Typography>
            <Typography variant='body1'>
                Use your mouse (or finger on a phone) to sign the form digitally
            </Typography>
            <Typography>Check out https://www.npmjs.com/package/signature_pad </Typography>
            <FlexContainer justifyContent={'center'}>
                <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
                <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
            </FlexContainer>
        </React.Fragment>)
}

Signature.propTypes = {
    currentStep: PropTypes.number,
}
