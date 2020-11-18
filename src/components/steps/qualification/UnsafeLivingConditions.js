import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import StepButtons from "../StepButtons";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
}));

const validate = (form, state, setState) => {
    const {likelyBecomeHomeless, moveToShelter, moveToCloseQuarters, noOtherSafeChoices, otherChoicesMoreExpensive } = form;
    if ( likelyBecomeHomeless || moveToShelter || moveToCloseQuarters || noOtherSafeChoices || otherChoicesMoreExpensive ) {
        return true;
    } else {
        const errorStep = state.currentStep * -1;
        setState({...state, currentStep: errorStep});
    }
}

export default function UnsafeLivingConditions({state, setState}) {

    const classes = useStyles();
    const [form, setForm] = React.useState({
        likelyBecomeHomeless: false,
        moveToShelter: false,
        moveToCloseQuarters: false,
        noOtherSafeChoices: false,
        otherChoicesMoreExpensive: false,
        notAtRisk: false,
    })

    const handleChange = (event) => {
        const {name, checked} = event.target;
        if ('notAtRisk' === name) {
            setForm({
                likelyBecomeHomeless: false,
                moveToShelter: false,
                moveToCloseQuarters: false,
                noOtherSafeChoices: false,
                otherChoicesMoreExpensive: false,
                notAtRisk: checked,
            })
        } else {
            setForm({...form, notAtRisk: false, [name]: checked})
        }
    }

    const {likelyBecomeHomeless, moveToShelter, moveToCloseQuarters, noOtherSafeChoices, otherChoicesMoreExpensive, notAtRisk} = form;
    const disabled = !(likelyBecomeHomeless || moveToShelter || moveToCloseQuarters || noOtherSafeChoices || otherChoicesMoreExpensive || notAtRisk)

    if (state.currentStep !== QualificationSteps.UNSAFE_LIVING_CONDITIONS) {
        return null
    }
    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>
            Would an eviction result in a health risk to you by placing you in unsafe living conditions?
        </Typography>
        <Typography variant='body1'>
            Check all that apply
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={likelyBecomeHomeless} onChange={handleChange}
                                       name="likelyBecomeHomeless" color='primary'/>}
                    label="I am likely to become homeless"
                />
                <FormControlLabel
                    control={<Checkbox checked={moveToShelter} onChange={handleChange}
                                       name="moveToShelter" color='primary'/>}
                    label="I will probably need to move into a homeless shelter"
                />
                <FormControlLabel
                    control={<Checkbox checked={moveToCloseQuarters} onChange={handleChange}
                                       name="moveToCloseQuarters" color='primary' />}
                    label="I will probably need to move in with someone else in close quarters"
                />
                <FormControlLabel
                    control={<Checkbox checked={noOtherSafeChoices} onChange={handleChange}
                                       name="noOtherSafeChoices" color='primary' />}
                    label="I do not have any other safe housing choices"
                />
                <FormControlLabel
                    control={<Checkbox checked={otherChoicesMoreExpensive} onChange={handleChange}
                                       name="otherChoicesMoreExpensive" color='primary' />}
                    label="Any other safe housing choices would cost me more money"
                />
                <FormControlLabel
                    control={<Checkbox checked={notAtRisk} onChange={handleChange}
                                       name="notAtRisk" color='primary'/>}
                    label="I am not at risk of unsafe housing"
                />
            </FormGroup>
        </FormControl>
        <StepButtons state={state} setState={setState} disableNext={disabled} validate={() => validate(form, state, setState)}/>
    </React.Fragment>)
}

UnsafeLivingConditions.propTypes = {
    currentStep: PropTypes.number,
}
