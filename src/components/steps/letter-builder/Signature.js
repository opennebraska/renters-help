import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";

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

export default function Signature({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        company: '',
        fullName: '',
    })

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const render = () => {
        if (currentStep !== LetterBuilderSteps.SIGNATURE) {
            return null
        }

        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3}>
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                       Please sign the form
                    </Typography>
                    <Typography variant='body1'>
                        Use your mouse (or finger on a phone) to sign the form digitally
                    </Typography>
                    <Typography>Check out https://www.npmjs.com/package/signature_pad </Typography>
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

Signature.propTypes = {
    currentStep: PropTypes.number,
}
