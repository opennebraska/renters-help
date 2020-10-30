import React from 'react';
import {StepNames} from "./StepNames";

export default function StepCounter({currentStep}) {
    if(currentStep === StepNames.START) {
        return null;
    }
    return <p>Qualification {currentStep} of 5</p>
}
