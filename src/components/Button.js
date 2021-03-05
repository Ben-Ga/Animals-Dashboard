import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
    return (
        <div className="button-main" style={{backgroundColor: determineColour(props), borderColor: determineColour(props)}}>
            <input type="button" onClick={props.clicked} value={props.text} />
        </div>
    )
}

const determineColour = (props) => {
    if(props.danger){
        return '#e8685f'
    }
    if(props.link){
        return '#6677e8'
    }
}

export default Button
