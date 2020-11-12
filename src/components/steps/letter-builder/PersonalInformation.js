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

export default function PersonalInformation({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        firstName: '',
        lastName: '',
        address: '',
        unit: '',
        city: '',
        state: 'Nebraska',
        zip: '',
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        setForm({...form, [id]: value})
    }

    const handleStateChange = (e) => {
        setForm({...form, state: e.target.value})
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
        <div className={classes.demo}>
            <TextField id="firstName" label="First Name" value={form.firstName} onChange={handleChange}
                       variant="outlined"/>
            <TextField id="lastName" label="Last Name" value={form.lastName} onChange={handleChange}
                       variant="outlined"/>
            <TextField id="address" label="Current Address" value={form.address} onChange={handleChange}
                       variant="outlined"/>
            <TextField id="unit" label="Unit (optional)" value={form.unit} onChange={handleChange}
                       variant="outlined"/>
            <TextField id="city" label="City" value={form.city} onChange={handleChange} variant="outlined"/>
            <FormControl variant="outlined">
                <InputLabel id="state-label">State</InputLabel>
                <Select labelId="state-select" id="state" value={form.state} onChange={handleStateChange}
                        autoWidth>
                    {Object.values(States).map((st) => <MenuItem id="state" value={st}>{st}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField id="zip" label="Zip" value={form.zip} onChange={handleChange} variant="outlined"/>
        </div>
        <div>
            <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
            <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
        </div>
    </React.Fragment>)
}

PersonalInformation.propTypes = {
    currentStep: PropTypes.number,
}
