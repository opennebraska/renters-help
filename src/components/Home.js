import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import Typography from '@material-ui/core/Typography';
import {createMuiTheme} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import * as ReactGA from "react-ga";
import { useTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    boxColor: {
        backgroundColor: '#E9B5BD'
    },
    demo: {
        backgroundColor: 'white',
    },
    bigText: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '70px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '34px'
        },
    },
    block: {
        [theme.breakpoints.up('lg')]: {
            padding: '32px',
            display: 'inline-block'
        },
        [theme.breakpoints.up('md')]: {
            padding: '16px',
            display: 'inline-block'
        }
    },
    icon: {
        fontSize: '80px',
        color: '#DC2A44'
    }
}));

const theme = createMuiTheme({palette: {primary: {main: '#DC2A44'}}})

export default function Home({state, setState}) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    useEffect(() => ReactGA.pageview('home'), []);
    return (
        <>
            <div style={{textAlign: "center"}}>
                <Box pt={6} pb={6} pl={[2, 4, 6, 24]} pr={[2, 4, 6, 24]} className={classes.boxColor}>
                    <h1 className={classes.bigText}>
                        <Trans i18nKey="homePageTitle">
                            Are you facing an <span style={{color: '#DC2A44'}}>eviction</span>? This tool can help.
                        </Trans>
                    </h1>
                    <p>{t('homeReasonToUse')}</p>
                    <Button style={{borderRadius: 15, textTransform: 'none', height: 50, width: 200}} color='primary'
                            variant='contained' disableElevation
                            onClick={() => {
                                setState({...state, formNumber: 1})
                            }}>
                        {t('homeStartButton')}
                    </Button>
                    <Box pt={3}>
                        <Link component={"a"} href={`${process.env.PUBLIC_URL}/?lng=${i18n.language === 'en' ? 'es': 'en'}`}>
                            <Typography variant="h6" component={"span"} noWrap>{t('homeLanguagePreference')}</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <div className={classes.block}>
                        <ListAltIcon className={classes.icon}/>
                        <h3>
                            <Trans i18nKey="homeInstruction1Title">
                                Fill out the form in 5 minutes
                            </Trans>
                        </h3>
                        <p>
                            <Trans i18nKey="homeInstruction1Info">
                                Answer a few questions and provide your<br/>landlord's contact information
                            </Trans>
                        </p>
                    </div>
                    <div className={classes.block}>
                        <DescriptionIcon className={classes.icon}/>
                        <h3>
                            <Trans i18nKey="homeInstruction2Title">
                                The tool will create a letter
                            </Trans>
                        </h3>
                        <p>
                            <Trans i18nKey="homeInstruction2Info">
                                The app will create a letter that is ready<br/>to send based on your answers
                            </Trans>
                        </p>
                    </div>
                    <div className={classes.block}>
                        <EmailIcon className={classes.icon}/>
                        <h3>
                            <Trans i18nKey="homeInstruction3Title">
                                Send the letter to your landlord
                            </Trans>
                        </h3>
                        <p>
                            <Trans i18nKey="homeInstruction3Info">
                                Download or print the letter to<br/>send to your landlord
                            </Trans>
                        </p>
                    </div>
                </Box>
                <Box pt={2} pb={2} pl={[4, 8, 16, 40]} pr={[4, 8, 16, 40]}>
                    <h2>
                        {t('homeAboutHeader')}
                    </h2>
                    <p>
                        {t('homeAboutInfo')}
                    </p>
                </Box>
                <Box pt={2} pb={2} pl={[4, 8, 16, 40]} pr={[4, 8, 16, 40]}>
                    <h2>
                        {t('homeOtherRentalAssistance')}
                    </h2>
                    <p>
                        <Trans i18nKey="homeContactLegalAid">
                            Please call <Link color="primary" href="https://www.legalaidofnebraska.org/how-we-help/resources/covid-19-coronavirus/housingcorona/tenants/"
                                              target="_blank" rel="nofollow">Legal Aid</Link> toll-free at 1-844-268-5627
                        </Trans>
                    </p>
                    <p><Link color="primary" href="https://www.douglascounty-ne.gov/coronovirus-relief-fund-information"
                    target="_blank" rel="nofollow">{t('douglasCountyCaresAct')}</Link></p>
                </Box>
                <Box pt={2}>
                    <footer>
                        <p><Link color="primary" href="https://codefornebraska.org/" target="_blank" rel="nofollow">2020
                            Code for Nebraska</Link></p>
                    </footer>
                </Box>
            </div>
        </>
    );
}

Home.propTypes = {
    formNumber: PropTypes.number,
}
