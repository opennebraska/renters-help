import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Button} from "@material-ui/core";
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

export default function IncomeQualifications({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        noIncome: false,
        stimulusCheck: false,
        underIncomeThreshold: false
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.checked})
    }

    const {noIncome, stimulusCheck, underIncomeThreshold} = form;
    if (state.currentStep !== QualificationSteps.INCOME_QUALIFICATIONS) {
        return null
    }
    return (<React.Fragment>
        <Typography variant="h6" className={classes.title}>
            Income Qualification
        </Typography>
        <Typography variant='body1'>
            Check all that apply
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={noIncome} onChange={handleChange} name="noIncome"/>}
                    label="I did not report any income to the I.R.S. for 2019"
                />
                <FormControlLabel
                    control={<Checkbox checked={stimulusCheck} onChange={handleChange}
                                       name="stimulusCheck"/>}
                    label="I got a stimulus check (Economic Impact Payment) in 2020"
                />
                <FormControlLabel
                    control={<Checkbox checked={underIncomeThreshold} onChange={handleChange}
                                       name="underIncomeThreshold"/>}
                    label="I either expect to earn no more than $99,000 in annual income for calendar year 2020 or no more than $198,000 if filing a joint tax return"
                />
            </FormGroup>
        </FormControl>
        <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
        <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
    </React.Fragment>)
}

IncomeQualifications.propTypes = {
    currentStep: PropTypes.number,
}
