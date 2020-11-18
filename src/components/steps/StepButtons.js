import Button from "@material-ui/core/Button";
import {nextStep, previousStep} from "./StepFunctions";
import FlexContainer from "../FlexContainer";
import React from "react";

export default function StepButtons({state, setState, validate = () => true, nextText = 'Next', disableNext = false, showPrevious = true, showNext = true}) {
    return (
        <FlexContainer justifyContent={'center'} styles={{marginTop: '20px'}}>
            {showPrevious && <Button variant='contained' style={{marginRight: '20px'}}
                    onClick={() => previousStep(state, setState)}>Previous</Button>}
            {showNext && <Button variant='contained' color='primary' disabled={disableNext}
                    onClick={() => nextStep(state, setState, validate)}>{nextText}</Button>}
        </FlexContainer>
    )
}
