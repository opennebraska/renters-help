import React from 'react';
import {QualificationSteps} from "./StepNames";

export default function StepCounter({currentStep}) {
    if(currentStep === QualificationSteps.START || currentStep >= QualificationSteps.QUALIFIED) {
        return null;
    }
    return <p>Qualification {currentStep} of 5</p>
}
