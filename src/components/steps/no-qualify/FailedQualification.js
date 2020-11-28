import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import StepButtons from "../StepButtons";
import {Link} from "@material-ui/core";
import * as ReactGA from "react-ga";
import { Trans } from 'react-i18next';

export default function FailedQualification({state, setState}) {
    const { currentStep, formNumber } = state;
    useEffect(() => ReactGA.pageview(`failed qualification on step: ${currentStep} and form: ${formNumber}`), [currentStep, formNumber]);
    if (state.currentStep >= 0) {
        return null
    }
    return (
        <>
            <Typography variant='h4' component='h1' className='title'>
                <Trans i18nKey="failedQualificationTitle">
                    Sorry, it looks like you don't qualify
                </Trans>
            </Typography>
            <Typography variant='body1'>
                <Trans i18nKey="failedQualificationBody">
                    If the answers you gave indicate you don't qualify, you can restart but please proceed with caution and
                    remember that you must answer these questions truthfully. You could be subject to civil or criminal
                    penalties if you lie on these forms. If you are in need of legal help, please see the resources provided
                    by a legal aid organization:
                </Trans>
            </Typography>
            <List>
                <ListItem>
                    <Link style={{cursor:'pointer'}} color={'primary'} href='https://www.legalaidofnebraska.org/'>Legal
                        Aid of Nebraska</Link>
                </ListItem>
            </List>
            <StepButtons state={state} setState={setState}/>
        </>)
}

FailedQualification.propTypes = {
    state: PropTypes.shape({currentStep: PropTypes.number, formNumber: PropTypes.number})
}
