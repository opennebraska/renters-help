import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "../StepFunctions";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
    title: {
        margin: '4 0 2'
    },
}));

export default function PreviewLetter({state, setState}) {

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
                <FormGroup>
                    <TextField id="letterPreview" label="" variant={"outlined"}
                               value={`This should for sure be a variable and not written here. This should for sure be a variable and not written here. This should for sure be a variable and not written here`}
                               multiline fullWidth/>
                </FormGroup>
            </FormControl>
            <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
            <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
        </React.Fragment>)
}

PreviewLetter.propTypes = {
    currentStep: PropTypes.number,
}
