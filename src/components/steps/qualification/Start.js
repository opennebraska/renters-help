import React, {useEffect} from 'react';
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
import * as ReactGA from "react-ga";
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation();
    useEffect(() => ReactGA.pageview('Start step'), []);
    const classes = useStyles();
    if (state.currentStep !== QualificationSteps.START) {
        return null
    }
    return (
        <React.Fragment>
            <Typography variant='h4' className='title'>{t('startTitle')}</Typography>
            <Typography variant='body1'>{t('startDescription')}</Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('startFirstStep')}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('startSecondStep')}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('startThirdStep')}/>
                    </ListItem>
                </List>
            </div>
            <StepButtons state={state} setState={setState} showPrevious={false}/>
        </React.Fragment>)
}

Start.propTypes = {
    currentStep: PropTypes.number,
}
