import React, { Component } from 'react';
import Start from "./steps/Start";
import {Button} from "@material-ui/core";

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
        }
    }

    render() {
        const currentStep = this.state.currentStep;
        return (
            <React.Fragment>
                <h1>Renters Help form</h1>
                <p>Step {currentStep}</p>

                <form onSubmit={() => alert('Submited')}>
                    <Start  currentStep={currentStep}/>
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
