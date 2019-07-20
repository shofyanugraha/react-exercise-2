import React from 'react';

const CharComponent = (props) => {
    const style = {
        padding: '1rem',
        display: 'inline-block',
        margin : '1rem',
        border: '1px solid #ccc',
        textAlign: 'center'
    }
    return (
        <div style={style} onClick={props.click}>
            {props.char}
        </div>
    )
}

export default CharComponent;