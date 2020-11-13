import React from 'react';
import {QualificationSteps} from "./StepNames";

export default function StepCounter({formNumber, currentStep}) {
    if(currentStep === QualificationSteps.START || currentStep >= QualificationSteps.QUALIFIED || currentStep < 0) {
        return null;
    }

    const identifier = formNumber === 1? 'Qualification': 'Step';
    return <p>{identifier} {currentStep} of 5</p>
}
