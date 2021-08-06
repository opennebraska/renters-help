import React, {useState} from 'react';
import Start from "./steps/qualification/Start";
import Home from "./Home";
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
import Paper from "@material-ui/core/Paper";
import FailedQualification from "./steps/no-qualify/FailedQualification";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import FlexContainer from "./FlexContainer";
import HighCovidRate from "./steps/qualification/HighCovidRate";

export default function FormContainer() {
  const [state, setState] = useState({
    currentStep: 0,
    formNumber: 0,
  });
  const [renterInfo, setRenterInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    unit: '',
    city: '',
    state: 'Nebraska',
    zip: '',
  });
  const [landlordInfo, setLandlordInfo] = useState({landlordCompany: '', landlordFullName: ''});
  const theme = createMuiTheme({palette: {primary: {main: '#DC2A44'}}})
  const {currentStep, formNumber} = state;
  return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <Link component={"a"} href={process.env.PUBLIC_URL} style={{textDecoration: "none", color: "white", verticalAlign: "middle"}}>
              <FlexContainer>
                <img src={`${process.env.PUBLIC_URL}/neb-renter-help-favicon-red.png`} alt="logo" style={{marginRight: 10}} width={30} height={30}/>
                <Typography variant="h6" component={"span"} noWrap>Nebraska Renters Help</Typography>
              </FlexContainer>
            </Link>
          </Toolbar>
        </AppBar>
        {formNumber === 0 ? <Home state={state} setState={setState}/> :
            <Box mt={10}>
              <Container maxWidth={'md'}>
                <Paper elevation={3}>
                  <Box display={'flex'} flexDirection={'column'} p={1} m={3}>
                    <StepCounter formNumber={formNumber} currentStep={currentStep}/>

                    {formNumber === 1 &&
                    <form>
                      <Start state={state} setState={setState}/>
                      <IncomeQualifications state={state} setState={setState}/>
                      <GovernmentHelp state={state} setState={setState}/>
                      <AffordRent state={state} setState={setState}/>
                      <UnsafeLivingConditions state={state} setState={setState}/>
                      <AttemptingToPay state={state} setState={setState}/>
                      <HighCovidRate state={state} setState={setState} />
                      <Qualified state={state} setState={setState}/>
                    </form>
                    }

                    {formNumber === 2 &&
                    <form>
                      <PersonalInformation state={state} setState={setState} renterInfo={renterInfo} setRenterInfo={setRenterInfo}/>
                      <LandlordInfo state={state} setState={setState} landlordInfo={landlordInfo} setLandlordInfo={setLandlordInfo}/>
                      <PreviewLetter state={state} setState={setState} renterInfo={renterInfo} landlordInfo={landlordInfo}/>
                    </form>
                    }
                    {currentStep < 0 &&
                    <div>
                      <FailedQualification state={state} setState={setState}/>
                    </div>
                    }
                  </Box>
                </Paper>
              </Container>
            </Box>
        }
      </ThemeProvider>
  )
}
