import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Button, Paper} from "@material-ui/core";
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

export default function DownloadLetter({currentStep}) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        company: '',
        fullName: '',
    })

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const render = () => {
        if (currentStep !== LetterBuilderSteps.DOWNLOAD_LETTER) {
            return null
        }

        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3}>
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                        Download your letter to send to your landlord
                    </Typography>
                    <Button variant="contained" color="primary">Download complete form</Button>
                    <Typography>Check out https://www.npmjs.com/package/pdfkit </Typography>
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

DownloadLetter.propTypes = {
    currentStep: PropTypes.number,
}
