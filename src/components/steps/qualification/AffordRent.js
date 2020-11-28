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
import {useTranslation} from 'react-i18next';

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
    if (selected === 'No' && (lostSubstantialIncome || lostJob || hoursCut || salaryReduced || extraordinaryMedicalCost || !none)) {
        return true
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep});
    }
}

export default function AffordRent({state, setState}) {
    const {t} = useTranslation();
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
    const disabled = !('Yes' === selected ||
        ('No' === selected && (lostSubstantialIncome || lostJob || hoursCut || salaryReduced || extraordinaryMedicalCost || none)))

    if (state.currentStep !== QualificationSteps.AFFORD_RENT) {
        return null
    }

    const rentReasons = (<FormGroup>
        <Typography variant='body1'>{t('affordRentOptionsTitle')}</Typography>
        <FormControlLabel
            control={<Checkbox checked={lostSubstantialIncome} onChange={handleChange}
                               name="lostSubstantialIncome" color='primary'/>}
            label={t('affordRentOptionLostSubstantialIncome')}
        />
        <FormControlLabel
            control={<Checkbox checked={lostJob} onChange={handleChange}
                               name="lostJob" color='primary'/>}
            label={t('affordRentOptionLostJob')}
        />
        <FormControlLabel
            control={<Checkbox checked={hoursCut} onChange={handleChange} name="hoursCut" color='primary'/>}
            label={t('affordRentOptionHoursCut')}
        />
        <FormControlLabel
            control={<Checkbox checked={salaryReduced} onChange={handleChange}
                               name="salaryReduced" color='primary'/>}
            label={t('affordRentOptionSalaryReduced')}
        />
        <FormControlLabel
            control={<Checkbox checked={extraordinaryMedicalCost} onChange={handleChange}
                               name="extraordinaryMedicalCost" color='primary'/>}
            label={t('affordRentOptionExtraordinaryMedicalCost')}
        />
        <FormControlLabel
            control={<Checkbox checked={none} onChange={handleChange} name="none" color='primary'/>}
            label={t('affordRentOptionNone')}
        />
        <Link className={classes.link} onClick={() => {
            setShowMedicalDef(!showMedicalDef);
        }} color="primary" style={{textAlign: 'left'}}>{t('affordRentExtraordinaryQuestion')}</Link>
        {showMedicalDef &&
        <FormHelperText>{t('affordRentExtraordinaryExplained')}</FormHelperText>}
    </FormGroup>)

    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>{t('affordRentTitle')}</Typography>
        <FormControl component="fieldset">
            <RadioGroup value={selected} onChange={handleSelectedChange}>
                <FormControlLabel value="Yes" control={<Radio color='primary'/>} label={t('yes')}/>
                <FormControlLabel value="No" control={<Radio color='primary'/>} label={t('no')}/>
            </RadioGroup>
            {'No' === selected && rentReasons}
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(form, state, setState)}
                     disableNext={disabled}/>
    </React.Fragment>)
}

AffordRent.propTypes = {
    currentStep: PropTypes.number,
}
