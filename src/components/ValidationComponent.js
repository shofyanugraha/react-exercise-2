import React from 'react';

const ValidationComponent = (props) => {
    
    let validationMessage = 'Text long enough bruh!';

    if(props.inputLength < 5) {
        validationMessage = 'Too Short Broh!';
    }
    
    return (
        <div>
            <p>{ validationMessage }</p>
        </div>
    )
}

export default ValidationComponent;