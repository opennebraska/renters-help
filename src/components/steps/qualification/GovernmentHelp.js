import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Link} from "@material-ui/core";
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

const validate = (selected, state, setState) => {
    if (selected === 'Yes') {
        return true
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep});
    }
}

export default function GovernmentHelp({state, setState}) {
    const {t} = useTranslation();

    const classes = useStyles();
    const [selected, setSelected] = React.useState('none')
    const [showBestEffortsDef, setShowBestEffortsDef] = React.useState(false);

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    if (state.currentStep !== QualificationSteps.GOVERNMENT_HELP) {
        return null
    }
    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>{t('governmentHelpTitle')}</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={selected} onChange={handleChange}>
                <FormControlLabel value="Yes" control={<Radio color='primary'/>} label={t('yes')}/>
                <FormControlLabel value="No" control={<Radio color='primary'/>} label={t('no')}/>
            </RadioGroup>
            <Link className={classes.link} onClick={() => {setShowBestEffortsDef(!showBestEffortsDef)}} color="primary" style={{textAlign: 'left'}}>{t('governmentHelpBestEffortsQuestion')}</Link>
            {showBestEffortsDef && <FormHelperText>{t('governmentHelpBestEffortsExplanation')}</FormHelperText>}
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(selected, state, setState)} disableNext={'none' === selected}/>
    </React.Fragment>)
}

GovernmentHelp.propTypes = {
    currentStep: PropTypes.number,
}
