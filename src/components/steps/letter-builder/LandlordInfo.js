import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import StepButtons from "../StepButtons";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  companyInformation: {
    margin: 4,
  }
}));

const validate = (landlordInfo, setError) => {
  if (landlordInfo.fullName) {
    setError(false);
    return true;
  } else {
    setError(true);
  }
}

export default function LandlordInfo({state, setState, landlordInfo, setLandlordInfo}) {
  const {t} = useTranslation();
  const classes = useStyles();

  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setLandlordInfo({...landlordInfo, [event.target.id]: event.target.value})
  }

  if (state.currentStep !== QualificationSteps.GOVERNMENT_HELP) {
    return null
  }

  const {company, fullName} = landlordInfo;
  return (
      <>
        <Typography variant='h4' component='h1' className='title'>
            {t('landlordInfoTitle')}
        </Typography>
        <Typography variant='body1'>
            {t('landlordInfoBody')}
        </Typography>
        <FormControl margin={'dense'} fullWidth>
          <TextField fullWidth className={classes.companyInformation} id="company" label={t('landlordCompany')} value={company} onChange={handleChange} variant={"outlined"}/>
          <TextField fullWidth className={classes.companyInformation} id="fullName" label={t('landlordFullName')} required error={error} value={fullName} onChange={handleChange} variant={"outlined"}/>
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(landlordInfo, setError)}/>
      </>
  )
}

LandlordInfo.propTypes = {
  currentStep: PropTypes.number,
}
