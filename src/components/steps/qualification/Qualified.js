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

export default function Qualified({state, setState}) {
    const {t} = useTranslation();

    useEffect(() => ReactGA.pageview('qualified'), []);
    const classes = useStyles();

        if (state.currentStep !== QualificationSteps.QUALIFIED) {
            return null
        }
        return (<>
            <Typography variant='h4' component='h1' className='title'>{t('qualifiedTitle')}</Typography>
            <Typography variant='body1'>{t('qualifiedBodyAgreeingDescription')}</Typography>
            <Typography variant='body1'>{t('qualifiedBodyProtected')}</Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('qualifiedBodyAgreeingStillResponsible')}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('qualifiedBodyAgreeingPayInFullAfterDate')}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleRounded/></ListItemIcon>
                        <ListItemText primary={t('qualifiedBodyAgreeingTellTheTruth')}/>
                    </ListItem>
                </List>
            </div>
            <StepButtons state={state} setState={setState} nextText={t('qualifiedBodyConfirmUnderstanding')}/>
        </>)
}

Qualified.propTypes = {
    currentStep: PropTypes.number,
}
