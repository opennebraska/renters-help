import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {CheckCircleRounded} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import {States} from "../states";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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

export default function PersonalInformation({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        address: '',
        unit: '',
        city: '',
        state: 'Nebraska',
        zip: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState({...state, [id]: value})
    }

    const handleStateChange = (e) => { setState({...state, state: e.target.value})}

    const render = () => {
        if (currentStep !== LetterBuilderSteps.PERSONAL_INFO) {
            return null
        }
        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3} >
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                        Enter your information
                    </Typography>
                    <Typography variant='body1'>
                        We need this information to complete a cover letter to your landlord as well as to ensure that
                        you qualify to use this self-help tool.
                    </Typography>
                    <div className={classes.demo}>
                        <TextField id="firstName" label="First Name" value={state.firstName} onChange={handleChange} variant="outlined" />
                        <TextField id="lastName" label="Last Name" value={state.lastName} onChange={handleChange} variant="outlined" />
                        <TextField id="address" label="Current Address" value={state.address} onChange={handleChange} variant="outlined" />
                        <TextField id="unit" label="Unit (optional)" value={state.unit} onChange={handleChange} variant="outlined" />
                        <TextField id="city" label="City" value={state.city} onChange={handleChange} variant="outlined" />
                        <TextField id="state" label="State" value={state.state} onChange={handleChange} variant="outlined" />
                        <FormControl variant="outlined">
                            <InputLabel id="state-label">State</InputLabel>
                            <Select labelId="state-select" id="state" value={state.state} onChange={handleStateChange} autoWidth>
                                {Object.values(States).map((st) => <MenuItem id="state" value={st}>{st}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <TextField id="zip" label="Zip" value={state.zip} onChange={handleChange} variant="outlined" />
                    </div>
                    {JSON.stringify(state)}
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

PersonalInformation.propTypes = {
    currentStep: PropTypes.number,
}
