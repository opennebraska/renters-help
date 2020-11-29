import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "./StepFunctions";
import FlexContainer from "../FlexContainer";
import React from "react";
import {useTranslation} from 'react-i18next';

export default function StepButtons({state, setState, validate = () => true, nextText, disableNext = false, showPrevious = true, showNext = true}) {
    const {t} = useTranslation();

    return (
        <FlexContainer justifyContent={'center'} styles={{marginTop: '20px'}}>
            {showPrevious && <Button variant='contained' style={{marginRight: '20px'}}
                    onClick={() => previousStep(state, setState)}>{t('previous')}</Button>}
            {showNext && <Button variant='contained' color='primary' disabled={disableNext}
                    onClick={() => nextStep(state, setState, validate)}>{nextText || t('next')}</Button>}
        </FlexContainer>
    )
}
