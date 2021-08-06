import React from 'react';
import {QualificationSteps, LetterBuilderSteps} from "./StepNames";
import { useTranslation } from 'react-i18next';

export default function StepCounter({formNumber, currentStep}) {
    const {t} = useTranslation();
    if(currentStep === QualificationSteps.START || currentStep >= QualificationSteps.QUALIFIED || currentStep < 0) {
        return null;
    }

    const identifier = formNumber === 1? t('qualification') : t('step');
    const finalStep = formNumber === 1? '6': LetterBuilderSteps.FINAL_STEP;
    return <p style={{textAlign: 'center'}}>{identifier} {currentStep} {t('of')} {finalStep}</p>
}
