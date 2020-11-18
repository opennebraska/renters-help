import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Link} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import StepButtons from "../StepButtons";

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

export default function GovernmentHelp({state, setState}) {

    const classes = useStyles();
    const [selected, setSelected] = React.useState('none')
    const [showBestEffortsDef, setShowBestEffortsDef] = React.useState(false);

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    if (state.currentStep !== QualificationSteps.GOVERNMENT_HELP) {
        return null
    }
    return (<React.Fragment>
        <Typography variant='h4' component='h1' className='title'>
            Did you do your best to get government help to pay the rent?
        </Typography>
        <Typography variant='body1'>
            If you do not qualify for any help from the government, or if applications were closed, your application
            was waitlisted, or assistance programs were no longer available or if you applied and you were denied,
            answer ‘Yes.’
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={selected} onChange={handleChange}>
                <FormControlLabel value="Yes" control={<Radio color='primary'/>} label="Yes"/>
                <FormControlLabel value="No" control={<Radio color='primary'/>} label="No"/>
            </RadioGroup>
            <Link className={classes.link} onClick={() => {
                setShowBestEffortsDef(!showBestEffortsDef)
            }} color="primary" style={{textAlign: 'left'}}>What are "best efforts" and "government help"?</Link>
            {showBestEffortsDef &&
            <FormHelperText>"Government help" means any governmental rental or housing payment benefits available to the individual
                or any household member. "Best efforts" is not defined by the Order. You should document whether your any applications were successful.
            </FormHelperText>}
        </FormControl>
        <StepButtons state={state} setState={setState} validate={() => validate(selected, state, setState)} disableNext={'none' === selected}/>
    </React.Fragment>)
}

GovernmentHelp.propTypes = {
    currentStep: PropTypes.number,
}
