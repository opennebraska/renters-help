import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {LetterBuilderSteps} from "../StepNames";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {previousStep} from "../StepFunctions";
import {getLetter} from "./letterTemplate";
import FlexContainer from "../../FlexContainer";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";

export default function PreviewLetter({state, setState, renterInfo, landlordInfo}) {

  if (state.currentStep !== LetterBuilderSteps.PREVIEW_LETTER) {
    return null
  }

  const letter = getLetter(renterInfo, landlordInfo);
  return (
      <>
        <Typography variant='h4' component='h1' className='title'>
          Preview your ready to send letter
        </Typography>
        <Typography variant='body1'>
          We created a form with all your information, please check and make sure it looks correct.
        </Typography>
        <FormControl fullWidth>
          <PDFViewer height={800} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
            {letter}
          </PDFViewer>
        </FormControl>
        <FlexContainer justifyContent={'center'} margin={10}>
          <Button variant='contained' style={{marginRight: '20px'}} onClick={() => previousStep(state, setState)}>Previous</Button>
          <PDFDownloadLink style={{textDecoration: 'none'}} document={letter} fileName={`${renterInfo.lastName}_${renterInfo.firstName}_Protected_Notification.pdf`}>
            <Button variant='contained' color='primary'> Download </Button>
          </PDFDownloadLink>
        </FlexContainer>
      </>
  )
}

PreviewLetter.propTypes = {
  currentStep: PropTypes.number,
}
