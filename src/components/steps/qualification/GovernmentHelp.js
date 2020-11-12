import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Button} from "@material-ui/core";
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

export default function GovernmentHelp({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        yes: false,
        no: false,
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.checked})
    }

    const {yes, no} = form;
    const render = () => {
        if (state.currentStep !== QualificationSteps.GOVERNMENT_HELP) {
            return null
        }
        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
                Did you do your best to get government help to pay the rent?
            </Typography>
            <Typography variant='body1'>
                If you do not qualify for any help from the government, or if applications were closed, your application
                was waitlisted, or assistance programs were no longer available or if you applied and you were denied,
                answer ‘Yes.’
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={yes} onChange={handleChange} name="yes"/>}
                        label="Yes"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={no} onChange={handleChange}
                                           name="no"/>}
                        label="No"
                    />
                </FormGroup>
                <FormHelperText>What are "best efforts" and "government help"? Add link or additional text to
                    explain.</FormHelperText>
            </FormControl>
            <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
            <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
        </React.Fragment>)
    }

    return render();
}

GovernmentHelp.propTypes = {
    currentStep: PropTypes.number,
}
