import React, {useState} from 'react';
import Start from "./steps/qualification/Start";
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
import FailedQualification from "./steps/no-qualify/FailedQualification";

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
                            <Start state={state} setState={setState}/>
                            <IncomeQualifications state={state} setState={setState}/>
                            <GovernmentHelp state={state} setState={setState}/>
                            <AffordRent state={state} setState={setState}/>
                            <UnsafeLivingConditions state={state} setState={setState}/>
                            <AttemptingToPay state={state} setState={setState}/>
                            <Qualified state={state} setState={setState}/>
                        </form>
                        }

                        {formNumber === 2 &&
                        <form onSubmit={() => alert('Submited')}>
                            <PersonalInformation state={state} setState={setState}/>
                            <LandlordInfo state={state} setState={setState}/>
                            <PreviewLetter state={state} setState={setState}/>
                            <Signature state={state} setState={setState}/>
                            <DownloadLetter state={state} setState={setState}/>
                        </form>
                        }
                        {currentStep < 0 &&
                        <div>
                            <FailedQualification state={state} setState={setState}/>
                        </div>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
