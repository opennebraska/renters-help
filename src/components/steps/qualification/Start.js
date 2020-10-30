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

export default function Start({currentStep}) {

    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const render = () => {
        if (currentStep !== QualificationSteps.START) {
            return null
        }
        return (<Grid container dirction='column' alignItems='center' justify='center'>
            <Grid item xs={12} md={3} >
                <Paper>
                    <Typography variant="h6" className={classes.title}>
                        How to stay in your home
                    </Typography>
                    <Typography variant='body1'>
                        The federal government has banned landlords from evicting qualifying tenants for non-payment of
                        rent due to the COVID-19 public health crisis. In order to protect yourself you need to:
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Make sure you qualify (there are 5 question we will ask you)."
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Fill out your address and your landlord's information."
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleRounded/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Send the letter to your landlord (we can help you with that)."
                                    secondary={secondary ? 'Secondary text' : null}
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

Start.propTypes = {
    currentStep: PropTypes.number,
}
