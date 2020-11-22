import '../App.css';
import FormContainer from "./FormContainer";
import React, {useEffect} from "react";
import ReactGA from 'react-ga';

function App() {
    useEffect(() => {
        ReactGA.initialize('UA-175185008-2');
    })
  return (
    <div className="App">
      <FormContainer/>
    </div>
  );
}

export default App;
