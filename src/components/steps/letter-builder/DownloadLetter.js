import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {LetterBuilderSteps} from "../StepNames";
import {previousStep} from "../StepFunctions";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: 'white',
    },
}));

export default function DownloadLetter({state, setState}) {

    const classes = useStyles();

    if (state.currentStep !== LetterBuilderSteps.DOWNLOAD_LETTER) {
        return null
    }

    return (<React.Fragment>
        <Typography variant="h6" className={classes.title}>
            Download your letter to send to your landlord
        </Typography>
        <Button variant="contained" color="primary">Download complete form</Button>
        <Typography>Check out https://www.npmjs.com/package/pdfkit </Typography>
        <div>
            <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
        </div>
    </React.Fragment>)
}

DownloadLetter.propTypes = {
    currentStep: PropTypes.number,
}
