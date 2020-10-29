import React from 'react';
import PropTypes from 'prop-types';

export default function Start({currentStep}) {
    const render = () => {
        if(currentStep !== 1) {
            return null
        }
        return <div>Start showing on step {currentStep}</div>
    }

    return render();
}

Start.propTypes = {
    currentStep: PropTypes.number,
}
