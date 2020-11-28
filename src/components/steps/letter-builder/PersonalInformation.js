import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import TextField from "@material-ui/core/TextField";
import {States} from "../states";
import MenuItem from "@material-ui/core/MenuItem";
import FlexContainer from "../../FlexContainer";
import StepButtons from "../StepButtons";
import {FormControl} from "@material-ui/core";
import { Trans, useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  personalInformation: {
    margin: 4,
  }
}));

const validate = (renterInfo, setErrors) => {
  const {firstName, lastName, address, city, state, zip} = renterInfo;
  if (firstName && lastName && address && city && state && zip) {
    return true;
  } else {
    setErrors({
      firstName: firstName === '',
      lastName: lastName === '',
      address: address === '',
      city: city === '',
      state: state === '',
      zip: zip === ''
    });
  }
}

export default function PersonalInformation({state, setState, renterInfo, setRenterInfo}) {

  const classes = useStyles();
  const { t } = useTranslation();

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    state: false,
    zip: false
  });

  const handleChange = (e) => {
    const {id, value} = e.target;
    setRenterInfo({...renterInfo, [id]: value})
  }

  const handleStateChange = (e) => {
    setRenterInfo({...renterInfo, state: e.target.value})
  }

  if (state.currentStep !== LetterBuilderSteps.PERSONAL_INFO) {
    return null
  }

  return (
      <>
        <Typography variant='h4' component='h1' className='title'>
          <Trans i18nKey="personalInformationTitle">
            Enter your information
          </Trans>
        </Typography>
        <Typography variant='body1'>
          <Trans i18nKey="personalInformationBody">
            We need this information to complete a cover letter to your landlord as well as to ensure that you qualify to use this self-help tool.
          </Trans>
        </Typography>
        <FormControl margin={'dense'} fullWidth>
          <FlexContainer>
            <TextField fullWidth className={classes.personalInformation} id="firstName" label={t('personalInformationFirstName')} value={renterInfo.firstName} onChange={handleChange} variant="outlined" error={errors.firstName} required/>
            <TextField fullWidth className={classes.personalInformation} id="lastName" label={t('personalInformationLastName')} value={renterInfo.lastName} onChange={handleChange} variant="outlined" error={errors.lastName} required/>
          </FlexContainer>

          <FlexContainer>
            <TextField fullWidth className={classes.personalInformation} id="address" label={t('personalInformationAddress')} value={renterInfo.address} onChange={handleChange} variant="outlined" error={errors.address} required/>
            <TextField className={classes.personalInformation} id="unit" label={t('personalInformationUnit')} value={renterInfo.unit} onChange={handleChange} variant="outlined"/>
          </FlexContainer>

          <FlexContainer>
            <TextField fullWidth className={classes.personalInformation} id="city" label={t('personalInformationCity')} value={renterInfo.city} onChange={handleChange} variant="outlined" error={errors.city} required/>
            <TextField select fullWidth variant={'outlined'} className={classes.personalInformation} labelid="state-select" id="state" value={renterInfo.state} onChange={handleStateChange} error={errors.state} required>
              {Object.values(States).map((st) => <MenuItem key={st} id="state" value={st}>{st}</MenuItem>)}
            </TextField>
            <TextField fullWidth className={classes.personalInformation} id="zip" label={t('personalInformationZip')} value={renterInfo.zip} onChange={handleChange} variant="outlined" error={errors.zip} required/>
          </FlexContainer>
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(renterInfo, setErrors)}/>
      </>
  )
}

PersonalInformation.propTypes = {
  currentStep: PropTypes.number,
}
