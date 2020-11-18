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

export default function Qualified({state, setState}) {

    const classes = useStyles();

        if (state.currentStep !== QualificationSteps.QUALIFIED) {
            return null
        }
        return (<React.Fragment>
            <Typography variant="h6" className={classes.title}>
                Great, you qualify! Read the following information carefully
            </Typography>
            <Typography variant='body1'>
                When you sign the Declaration form, you are agreeing that you understand the following sentences and
                that they are true:
            </Typography>
            <Typography variant='body1'>
                Even though I am protected from eviction through December 31, 2020,
            </Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="I still am responsible to pay my rent and follow all other rules of my lease. My landlord may charge me fees or interest."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="After December 31, 2020, I may be required to pay all of the rent due, in full."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleRounded/>
                        </ListItemIcon>
                        <ListItemText
                            primary="I need to tell the truth on this form. If I do not, I may face civil or criminal penalties."
                        />
                    </ListItem>
                </List>
            </div>
            <StepButtons state={state} setState={setState} nextText='I Understand'/>
        </React.Fragment>)
}

Qualified.propTypes = {
    currentStep: PropTypes.number,
}
