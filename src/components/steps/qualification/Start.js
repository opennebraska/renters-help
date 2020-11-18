import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {CheckCircleRounded} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";
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

export default function Start({state, setState}) {

    const classes = useStyles();
    if (state.currentStep !== QualificationSteps.START) {
        return null
    }
    return (
        <React.Fragment>
            <Typography variant="h6" className={classes.title}>
                How to stay in your home
            </Typography>
            <Typography variant='body1'>
                The federal government has banned landlords from evicting qualifying tenants for non-payment of
                rent due to the COVID-19 public health crisis. In order to protect yourself you need to:
            </Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Make sure you qualify (there are 5 question we will ask you)."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Fill out your address and your landlord's information."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Send the letter to your landlord (we can help you with that)."
                        />
                    </ListItem>
                </List>
            </div>
            <StepButtons state={state} setState={setState} showPrevious={false}/>
        </React.Fragment>)
}

Start.propTypes = {
    currentStep: PropTypes.number,
}
