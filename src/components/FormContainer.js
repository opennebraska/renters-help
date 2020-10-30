import React, {Component} from 'react';
import Start from "./steps/qualification/Start";
import {Button} from "@material-ui/core";
import IncomeQualifications from "./steps/qualification/IncomeQualifications";
import GovernmentHelp from "./steps/qualification/GovernmentHelp";
import AffordRent from "./steps/qualification/AffordRent";
import StepCounter from "./steps/StepCounter";
import UnsafeLivingConditions from "./steps/qualification/UnsafeLivingConditions";
import AttemptingToPay from "./steps/qualification/AttemptingToPay";
import Qualified from "./steps/qualification/Qualified";
import PersonalInformation from "./steps/letter-builder/PersonalInformation";
import {QualificationSteps} from "./steps/StepNames";

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            formNumber: 1,
        }
    }

    render() {
        const {currentStep, formNumber} = this.state;
        return (
            <React.Fragment>
                <h1>Renters Help form</h1>
                <StepCounter currentStep={currentStep}/>

                {formNumber === 1 &&
                <form onSubmit={() => alert('Submited')}>
                    <Start currentStep={currentStep}/>
                    <IncomeQualifications currentStep={currentStep}/>
                    <GovernmentHelp currentStep={currentStep}/>
                    <AffordRent currentStep={currentStep}/>
                    <UnsafeLivingConditions currentStep={currentStep}/>
                    <AttemptingToPay currentStep={currentStep}/>
                    <Qualified currentStep={currentStep}/>
                </form>
                }

                {formNumber === 2 &&
                <form onSubmit={() => alert('Submited')}>
                    <PersonalInformation currentStep={currentStep}/>

                </form>
                }

                <Button variant='contained' onClick={this.previousStep}>Previous</Button>
                <Button variant='contained' color='primary' onClick={this.nextStep}>Next</Button>
            </React.Fragment>
        )
    }

    nextStep = () => {
        let {currentStep, formNumber} = this.state;
        if (formNumber === 1 && currentStep === QualificationSteps.FINAL_STEP) {
            formNumber = 2;
            currentStep = 1;
        } else {
            currentStep = this.state.currentStep + 1;
        }
        this.setState({currentStep, formNumber});
    }

    previousStep = () => {
        this.setState({currentStep: this.state.currentStep - 1})
    }
}
