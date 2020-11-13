import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/styles";
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

export default function FailedQualification({state, setState}) {

    const classes = useStyles();
    if (state.currentStep >= 0) {
        return null
    }
    return (
        <React.Fragment>
            <Typography variant="h6" className={classes.title}>
                Sorry, it looks like you don't qualify
            </Typography>
            <Typography variant='body1'>
                If the answers you gave indicate you don't qualify, you can restart but please proceed with caution and
                remember that you must answer these questions truthfully. You could be subject to civil or criminal
                penalties if you lie on these forms. If you are in need of legal help, please see the resources provided
                by a legal aid organization:
            </Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <a href='https://www.legalaidofnebraska.org/'>Legal Aid of Nebraska</a>
                    </ListItem>
                </List>
            </div>
            <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
            <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
        </React.Fragment>)
}

FailedQualification.propTypes = {
    state: PropTypes.shape({currentStep: PropTypes.number, formNumber: PropTypes.number})
}
