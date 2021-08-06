import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import StepButtons from "../StepButtons";
import {useTranslation} from 'react-i18next';
import {Link} from "@material-ui/core";

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

export default function HighCovidRate({state, setState}) {
  const {t} = useTranslation();

  const classes = useStyles();
  const [selected, setSelected] = React.useState('none')

  const handleChange = (event) => {
    setSelected(event.target.value)
  }

  if (state.currentStep !== QualificationSteps.HIGH_COVID_RATE) {
    return null
  }
  return (<React.Fragment>
    <Typography variant='h4' component='h1' className='title'>{t('highCovidRateTitle')}</Typography>
    <Typography variant='body1'>Check your county's COVID-19 transmission rate <Link target='_blank' href='https://covid.cdc.gov/covid-data-tracker/#county-view'>here</Link></Typography>
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup value={selected} onChange={handleChange}>
        <FormControlLabel value="Yes" control={<Radio color='primary'/>} label={t('yes')}/>
        <FormControlLabel value="No" control={<Radio color='primary'/>} label={t('no')}/>
      </RadioGroup>
    </FormControl>
    <StepButtons state={state} setState={setState} validate={() => validate(selected, state, setState)} disableNext={'none' === selected}/>
  </React.Fragment>)
}

HighCovidRate.propTypes = {
  currentStep: PropTypes.number,
}
