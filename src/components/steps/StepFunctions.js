import {LetterBuilderSteps, QualificationSteps} from "./StepNames";

export const nextStep = (state, setState, validate = () => true) => {
    if (validate()) {
        let {currentStep, formNumber} = state;
        if (formNumber === 1 && currentStep === QualificationSteps.FINAL_STEP) {
            formNumber = 2;
            currentStep = 1;
        } else {
            currentStep = state.currentStep + 1;
        }
        console.log(`${currentStep}, ${formNumber}`)
        setState({currentStep, formNumber});
    }
}

export const previousStep = (state, setState) => {
    let {currentStep, formNumber} = state;
    if (currentStep < 0) {
        currentStep = -1 * currentStep;
    } else if (formNumber === 2 && currentStep === LetterBuilderSteps.PERSONAL_INFO) {
        formNumber = 1;
        currentStep = QualificationSteps.FINAL_STEP;
    } else if (!(formNumber === 1 && currentStep === QualificationSteps.START)) {
        currentStep = currentStep - 1;
    }
    setState({currentStep, formNumber})
}
