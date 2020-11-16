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
import {getLetter} from "./letterTemplate";
import {ButtonGroup} from "@material-ui/core";
import FlexContainer from "../../FlexContainer";

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
                <FormGroup>
                    <TextField id="letterPreview" label="" variant={"outlined"}
                               value={getLetter(renterInfo, landlordInfo)}
                               multiline rowsMax={20} fullWidth/>
                </FormGroup>
            </FormControl>
            <FlexContainer justifyContent={'center'}>
                <ButtonGroup>
                    <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
                    <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
                </ButtonGroup>
            </FlexContainer>
        </React.Fragment>)
}

PreviewLetter.propTypes = {
    currentStep: PropTypes.number,
}
