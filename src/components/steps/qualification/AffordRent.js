import React from 'react';
import PropTypes from 'prop-types';
import {FormHelperText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {nextStep, previousStep} from "../StepFunctions";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

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

const validate = (form, state, setState) => {
    const {selected, lostSubstantialIncome, lostJob, hoursCut, salaryReduced, extraordinaryMedicalCost, none} = form;
    if (selected === 'no' && (lostSubstantialIncome || lostJob || hoursCut || salaryReduced || extraordinaryMedicalCost || !none)) {
        return true
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep});
        return false;
    }
}

export default function AffordRent({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        selected: 'none',
        lostSubstantialIncome: false,
        lostJob: false,
        hoursCut: false,
        salaryReduced: false,
        extraordinaryMedicalCost: false,
        none: false
    })

    const handleChange = (event) => {
        const {name, checked} = event.target;
        if ('none' === name) {
            setForm({
                ...form,
                lostSubstantialIncome: false,
                lostJob: false,
                hoursCut: false,
                salaryReduced: false,
                extraordinaryMedicalCost: false,
                none: checked
            })
        } else {
            setForm({...form, none: false, [name]: checked})
        }
    }

    const handleSelectedChange = (event) => {
        setForm({...form, selected: event.target.value})
    }

    const {selected, lostSubstantialIncome, lostJob, hoursCut, salaryReduced, extraordinaryMedicalCost, none} = form;
    const disabled = !('yes' === selected ||
        ('no' === selected && (lostSubstantialIncome || lostJob || hoursCut || salaryReduced || extraordinaryMedicalCost || none)))

    if (state.currentStep !== QualificationSteps.AFFORD_RENT) {
        return null
    }

    const rentReasons = (<FormGroup>
        <Typography variant='body1'>Check all that apply</Typography>
        <FormControlLabel
            control={<Checkbox checked={lostSubstantialIncome} onChange={handleChange}
                               name="lostSubstantialIncome"/>}
            label="My household lost substantial income"
        />
        <FormControlLabel
            control={<Checkbox checked={lostJob} onChange={handleChange}
                               name="lostJob"/>}
            label="I lost my job"
        />
        <FormControlLabel
            control={<Checkbox checked={hoursCut} onChange={handleChange} name="hoursCut"/>}
            label="My hours were cut"
        />
        <FormControlLabel
            control={<Checkbox checked={salaryReduced} onChange={handleChange}
                               name="salaryReduced"/>}
            label="My salary was reduced"
        />
        <FormControlLabel
            control={<Checkbox checked={extraordinaryMedicalCost} onChange={handleChange}
                               name="extraordinaryMedicalCost"/>}
            label="I have extraordinary medical costs that I pay out of pocket that insurance does not cover"
        />
        <FormControlLabel
            control={<Checkbox checked={none} onChange={handleChange} name="none"/>}
            label="None of the above"
        />
        <FormHelperText>What are "extraordinary medical costs"? Add link or extra text on click</FormHelperText>
    </FormGroup>)

    return (<React.Fragment>
        <Typography variant="h6" className={classes.title}>
            Can you afford your rent?
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={selected} onChange={handleSelectedChange}>
                <FormControlLabel value="yes" control={<Radio/>} label="yes"/>
                <FormControlLabel value="no" control={<Radio/>} label="no"/>
            </RadioGroup>
            {'no' === selected && rentReasons}
        </FormControl>
        <div>
            <Button variant='contained' style={{marginRight: '20px'}}
                    onClick={() => previousStep(state, setState)}>Previous</Button>
            <Button variant='contained' color='primary' disabled={disabled}
                    onClick={() => nextStep(state, setState, () => validate(form, state, setState))}>Next</Button>
        </div>
    </React.Fragment>)
}

AffordRent.propTypes = {
    currentStep: PropTypes.number,
}
