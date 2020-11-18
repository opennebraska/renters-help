import React from 'react';
import PropTypes from 'prop-types';
import {FormHelperText, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import StepButtons from "../StepButtons";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
    link: {
        cursor: 'pointer'
    }
}));

const validate = (form, state, setState) => {
    const {selected, lostSubstantialIncome, lostJob, hoursCut, salaryReduced, extraordinaryMedicalCost, none} = form;
    if (selected === 'no' && (lostSubstantialIncome || lostJob || hoursCut || salaryReduced || extraordinaryMedicalCost || !none)) {
        return true
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep});
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
    const [showMedicalDef, setShowMedicalDef] = React.useState(false)


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
                               name="lostSubstantialIncome" color='primary' />}
            label="My household lost substantial income"
        />
        <FormControlLabel
            control={<Checkbox checked={lostJob} onChange={handleChange}
                               name="lostJob" color='primary' />}
            label="I lost my job"
        />
        <FormControlLabel
            control={<Checkbox checked={hoursCut} onChange={handleChange} name="hoursCut" color='primary' />}
            label="My hours were cut"
        />
        <FormControlLabel
            control={<Checkbox checked={salaryReduced} onChange={handleChange}
                               name="salaryReduced" color='primary' />}
            label="My salary was reduced"
        />
        <FormControlLabel
            control={<Checkbox checked={extraordinaryMedicalCost} onChange={handleChange}
                               name="extraordinaryMedicalCost" color='primary' />}
            label="I have extraordinary medical costs that I pay out of pocket that insurance does not cover"
        />
        <FormControlLabel
            control={<Checkbox checked={none} onChange={handleChange} name="none" color='primary' />}
            label="None of the above"
        />
        <Link className={classes.link} onClick={() => {
            setShowMedicalDef(!showMedicalDef);
        }} color="inherit" style={{textAlign: 'left'}}>What are "extraordinary medical costs"?</Link>
        {showMedicalDef &&
        <FormHelperText>An “extraordinary” medical expense is any unreimbursed medical expense likely to exceed
            7.5% of one’s adjusted gross income for the year.</FormHelperText>}
    </FormGroup>)

    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>
            Can you afford your rent?
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={selected} onChange={handleSelectedChange}>
                <FormControlLabel value="yes" control={<Radio color='primary'/>} label="yes"/>
                <FormControlLabel value="no" control={<Radio color='primary'/>} label="no"/>
            </RadioGroup>
            {'no' === selected && rentReasons}
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(form, state, setState)}
                     disableNext={disabled}/>
    </React.Fragment>)
}

AffordRent.propTypes = {
    currentStep: PropTypes.number,
}
