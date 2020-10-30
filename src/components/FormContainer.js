import React, { Component } from 'react';
import Start from "./steps/Start";
import {Button} from "@material-ui/core";
import IncomeQualifications from "./steps/IncomeQualifications";
import GovernmentHelp from "./steps/GovernmentHelp";
import AffordRent from "./steps/AffordRent";
import StepCounter from "./steps/StepCounter";
import UnsafeLivingConditions from "./steps/UnsafeLivingConditions";
import AttemptingToPay from "./steps/AttemptingToPay";

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
        }
    }

    render() {
        const currentStep = this.state.currentStep;
        return (
            <React.Fragment>
                <h1>Renters Help form</h1>
                <StepCounter currentStep={currentStep}/>

                <form onSubmit={() => alert('Submited')}>
                    <Start  currentStep={currentStep}/>
                    <IncomeQualifications currentStep={currentStep}/>
                    <GovernmentHelp currentStep={currentStep} />
                    <AffordRent currentStep={currentStep} />
                    <UnsafeLivingConditions currentStep={currentStep} />
                    <AttemptingToPay currentStep={currentStep} />
                </form>

                <Button variant='contained' onClick={this.previousStep}>Previous</Button>
                <Button variant='contained' color='primary' onClick={this.nextStep}>Next</Button>
            </React.Fragment>
        )
    }

    nextStep = () => {
        let currentStep = this.state.currentStep + 1;
        this.setState({currentStep})
    }

    previousStep = () => {
        this.setState({currentStep: this.state.currentStep - 1})
    }
}
