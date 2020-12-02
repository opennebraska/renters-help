import '../App.css';
import FormContainer from "./FormContainer";
import React from "react";
import ReactGA from 'react-ga';
import '../i18n';

ReactGA.initialize('UA-175185008-2');

function App() {
    return (
        <div className="App">
            <FormContainer/>
        </div>
    );
}

export default App;
