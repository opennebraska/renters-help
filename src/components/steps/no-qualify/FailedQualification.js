import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import StepButtons from "../StepButtons";
import {Link} from "@material-ui/core";
import * as ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

export default function FailedQualification({state, setState}) {
    const {t} = useTranslation();
    const { currentStep, formNumber } = state;
    useEffect(() => ReactGA.pageview(`failed qualification on step: ${currentStep} and form: ${formNumber}`), [currentStep, formNumber]);
    if (state.currentStep >= 0) {
        return null
    }
    return (
        <>
            <Typography variant='h4' component='h1' className='title'>
                {t('failedQualificationTitle')}
            </Typography>
            <Typography variant='body1'>
                {t('failedQualificationBody')}
            </Typography>
            <List>
                <ListItem>
                    <Link style={{cursor:'pointer'}} color={'primary'} href='https://www.legalaidofnebraska.org/'>{t('legalAidOfNebraska')}</Link>
                </ListItem>
            </List>
            <StepButtons state={state} setState={setState}/>
        </>)
}

FailedQualification.propTypes = {
    state: PropTypes.shape({currentStep: PropTypes.number, formNumber: PropTypes.number})
}
