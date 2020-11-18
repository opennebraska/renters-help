import React from 'react';
import {QualificationSteps, LetterBuilderSteps} from "./StepNames";

export default function StepCounter({formNumber, currentStep}) {
    if(currentStep === QualificationSteps.START || currentStep >= QualificationSteps.QUALIFIED || currentStep < 0) {
        return null;
    }

    const identifier = formNumber === 1? 'Qualification': 'Step';
    const finalStep = formNumber === 1? '5': LetterBuilderSteps.FINAL_STEP;
    return <p style={{textAlign: 'center'}}>{identifier} {currentStep} of {finalStep}</p>
}
