import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

export default function AttemptingToPay({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        yes: false,
        no: false,
        lostSubstantialIncome: false,
        lostJob: false,
        hoursCut: false,
        salaryReduced: false,
        extraordinaryMedicalCost: false,
        none: false
    })

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked})
    }

    const {yes, no} = state;
    const render = () => {
        if (currentStep !== QualificationSteps.ATTEMPTING_TO_PAY) {
            return null
        }

        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
                I am doing my best to pay as much rent as I can, given my circumstances
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

            </FormControl>
        </React.Fragment>)
    }

    return render();
}

AttemptingToPay.propTypes = {
    currentStep: PropTypes.number,
}
