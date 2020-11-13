import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
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

const validateIncomeQualification = (form, state, setState) => {
    const {noIncome, stimulusCheck, underIncomeThreshold} = form;
    if (noIncome || stimulusCheck || underIncomeThreshold) {
        return true
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep})
    }
}

export default function IncomeQualifications({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        noIncome: false,
        stimulusCheck: false,
        underIncomeThreshold: false,
        noneOfTheAbove: false,

    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.checked})
    }

    const {noIncome, stimulusCheck, underIncomeThreshold, noneOfTheAbove} = form;
    const noneSelected = !(noIncome || stimulusCheck || underIncomeThreshold || noneOfTheAbove);

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
                <FormControlLabel
                    control={<Checkbox checked={noneOfTheAbove} onChange={handleChange}
                                       name="noneOfTheAbove"/>}
                    label="None of the above"
                />
            </FormGroup>
        </FormControl>
        <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
        <Button variant='contained' color='primary' disabled={noneSelected} onClick={() => nextStep(state, setState, () => validateIncomeQualification(form, state, setState))}>Next</Button>
    </React.Fragment>)
}

IncomeQualifications.propTypes = {
    state: PropTypes.shape({currentStep: PropTypes.number, formNumber: PropTypes.number}),
}
