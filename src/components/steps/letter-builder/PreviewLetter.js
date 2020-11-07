import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

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

export default function PreviewLetter({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        company: '',
        fullName: '',
    })

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const render = () => {
        if (currentStep !== LetterBuilderSteps.PREVIEW_LETTER) {
            return null
        }

        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3}>
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                        Preview your ready to send letter
                    </Typography>
                    <Typography variant='body1'>
                        We created a form with all your information, please check and make sure it looks correct.
                    </Typography>
                    <FormControl component="fieldset" className={classes.formControl} fullWidth>
                        <FormGroup>
                            <TextField id="letterPreview" label="" variant={"outlined"}
                                       value={`This should for sure be a variable and not written here. This should for sure be a variable and not written here. This should for sure be a variable and not written here`}
                                       multiline fullWidth/>
                        </FormGroup>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

PreviewLetter.propTypes = {
    currentStep: PropTypes.number,
}
