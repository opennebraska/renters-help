import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
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

export default function UnsafeLivingConditions({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        likelyBecomeHomeless: false,
        moveToShelter: false,
        moveToCloseQuarters: false,
        noOtherSafeChoices: false,
        otherChoicesMoreExpensive: false,
        notAtRisk: false,
    })

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked})
    }

    const {likelyBecomeHomeless, moveToShelter, moveToCloseQuarters, noOtherSafeChoices, otherChoicesMoreExpensive, notAtRisk} = state;
    const render = () => {
        if (currentStep !== QualificationSteps.UNSAFE_LIVING_CONDITIONS) {
            return null
        }
        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3}>
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                        Would an eviction result in a health risk to you by placing you in unsafe living conditions?
                    </Typography>
                    <Typography variant='body1'>
                        Check all that apply
                    </Typography>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={likelyBecomeHomeless} onChange={handleChange} name="likelyBecomeHomeless"/>}
                                label="I am likely to become homeless"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={moveToShelter} onChange={handleChange}
                                                   name="moveToShelter"/>}
                                label="I will probably need to move into a homeless shelter"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={moveToCloseQuarters} onChange={handleChange}
                                                   name="moveToCloseQuarters"/>}
                                label="I will probably need to move in with someone else in close quarters"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={noOtherSafeChoices} onChange={handleChange} name="noOtherSafeChoices"/>}
                                label="I do not have any other safe housing choices"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={otherChoicesMoreExpensive} onChange={handleChange}
                                                   name="otherChoicesMoreExpensive"/>}
                                label="Any other safe housing choices would cost me more money"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={notAtRisk} onChange={handleChange}
                                                   name="notAtRisk"/>}
                                label="I am not at risk of unsafe housing"
                            />
                        </FormGroup>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

UnsafeLivingConditions.propTypes = {
    currentStep: PropTypes.number,
}
