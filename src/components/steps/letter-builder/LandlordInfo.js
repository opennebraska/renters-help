import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import StepButtons from "../StepButtons";
import {Trans} from "react-i18next";

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
            <Trans i18nKey="landlordInfoTitle">
                Enter your landlord's information
            </Trans>
        </Typography>
        <Typography variant='body1'>
            <Trans i18nKey="landlordInfoBody">
              This information will determine where your letter is sent. You can send this information to go
              to your landlord, the owner of the property where you live, or another person who has the right
              to have you evicted or removed from where you live. If you are unsure where to send this notice,
              please look at your lease or ask your landlord where you may send a legal notice.
            </Trans>
        </Typography>
        <FormControl margin={'dense'} fullWidth>
          <TextField fullWidth className={classes.companyInformation} id="company" label="company" value={company} onChange={handleChange} variant={"outlined"}/>
          <TextField fullWidth className={classes.companyInformation} id="fullName" label="full name" required error={error} value={fullName} onChange={handleChange} variant={"outlined"}/>
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(landlordInfo, setError)}/>
      </>
  )
}

LandlordInfo.propTypes = {
  currentStep: PropTypes.number,
}
