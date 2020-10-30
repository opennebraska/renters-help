import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {CheckCircleRounded, KeyboardArrowRightRounded} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {QualificationSteps} from "../StepNames";

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

export default function Qualified({currentStep}) {

    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const render = () => {
        if (currentStep !== QualificationSteps.QUALIFIED) {
            return null
        }
        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3} >
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                    Great, you qualify! Read the following information carefully
                    </Typography>
                    <Typography variant='body1'>
                        When you sign the Declaration form, you are agreeing that you understand the following sentences and that they are true:
                    </Typography>
                    <Typography variant='body1'>
                        Even though I am protected from eviction through December 31, 2020,
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemIcon>
                                    <KeyboardArrowRightRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="I still am responsible to pay my rent and follow all other rules of my lease. My landlord may charge me fees or interest."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <KeyboardArrowRightRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="After December 31, 2020, I may be required to pay all of the rent due, in full."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <KeyboardArrowRightRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="I need to tell the truth on this form. If I do not, I may face civil or criminal penalties."
                                />
                            </ListItem>
                        </List>
                    </div>
                </Paper>
            </Grid>
        </Grid>)
    }

    return render();
}

Qualified.propTypes = {
    currentStep: PropTypes.number,
}
