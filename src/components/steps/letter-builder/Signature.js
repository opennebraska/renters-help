import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "../StepFunctions";
import FlexContainer from "../../FlexContainer";
import {ButtonGroup} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
}));

export default function Signature({state, setState}) {

    const classes = useStyles();

        if (state.currentStep !== LetterBuilderSteps.SIGNATURE) {
            return null
        }

        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
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
