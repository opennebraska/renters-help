import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import {States} from "../states";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "../StepFunctions";
import FlexContainer from "../../FlexContainer";
import {ButtonGroup} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
    personalInformation: {
        marginBottom: '1em',
        marginRight: '1em'
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

    const [errors, setErrors] = React.useState({
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

    return (<React.Fragment>
        <Typography variant="h6" className={classes.title}>
            Enter your information
        </Typography>
        <Typography variant='body1'>
            We need this information to complete a cover letter to your landlord as well as to ensure that
            you qualify to use this self-help tool.
        </Typography>
        <FlexContainer justifyContent={'center'}>
            <TextField className={classes.personalInformation} id="firstName" label="First Name" value={renterInfo.firstName} onChange={handleChange}
                       variant="outlined" error={errors.firstName} required/>
            <TextField className={classes.personalInformation} id="lastName" label="Last Name" value={renterInfo.lastName} onChange={handleChange}
                       variant="outlined" error={errors.lastName} required/>
        </FlexContainer>
        <FlexContainer justifyContent={'center'}>
            <TextField className={classes.personalInformation} id="address" label="Current Address" value={renterInfo.address} onChange={handleChange}
                       variant="outlined" error={errors.address} required/>
            <TextField className={classes.personalInformation} id="unit" label="Unit (optional)" value={renterInfo.unit} onChange={handleChange}
                       variant="outlined"/>
        </FlexContainer>
        <FlexContainer justifyContent={'center'}>
            <TextField className={classes.personalInformation} id="city" label="City" value={renterInfo.city} onChange={handleChange} variant="outlined"
                       error={errors.city} required/>
            <Select variant={'outlined'} className={classes.personalInformation} labelId="state-select" id="state" value={renterInfo.state} onChange={handleStateChange}
                    autoWidth error={errors.state} required>
                {Object.values(States).map((st) => <MenuItem id="state" value={st}>{st}</MenuItem>)}
            </Select>
            <TextField className={classes.personalInformation} id="zip" label="Zip" value={renterInfo.zip} onChange={handleChange} variant="outlined"
                       error={errors.zip} required/>
        </FlexContainer>
        <FlexContainer justifyContent={'center'} styles={{marginTop: '2em'}}>
            <ButtonGroup>
                <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
                <Button variant='contained' color='primary' onClick={() => nextStep(state, setState, () => validate(renterInfo, setErrors))}>Next</Button>
            </ButtonGroup>
        </FlexContainer>
    </React.Fragment>)
}

PersonalInformation.propTypes = {
    currentStep: PropTypes.number,
}
