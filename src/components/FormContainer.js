import React, {useState} from 'react';
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
import LandlordInfo from "./steps/letter-builder/LandlordInfo";
import PreviewLetter from "./steps/letter-builder/PreviewLetter";
import Signature from "./steps/letter-builder/Signature";
import DownloadLetter from "./steps/letter-builder/DownloadLetter";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {nextStep, previousStep} from "./steps/StepFunctions";

export default function FormContainer() {
    const [state, setState] = useState({
        currentStep: 0,
        formNumber: 1,
    });

    const {currentStep, formNumber} = state;
    return (
        <React.Fragment>
            <Grid container dirction='column' alignItems='center' justify='center'>
                <Grid item xs={12} md={4}>
                    <Paper style={{padding: '15px'}}>
                        <h1>Renters Help form</h1>
                        <StepCounter formNumber={formNumber} currentStep={currentStep}/>

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
                            <LandlordInfo currentStep={currentStep}/>
                            <PreviewLetter currentStep={currentStep}/>
                            <Signature currentStep={currentStep}/>
                            <DownloadLetter currentStep={currentStep}/>
                        </form>
                        }

                        <Button variant='contained' onClick={() => previousStep(state, setState)}>Previous</Button>
                        <Button variant='contained' color='primary' onClick={() => nextStep(state, setState)}>Next</Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
