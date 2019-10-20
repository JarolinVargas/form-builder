import React from 'react';
import './Input.scss';

export default function Input(props) {
    return (
        <div className="f8r-input" onClick={props.itemClick} onDoubleClick={props.itemDoubleClick}>
            <label>{props.label}</label>
            <input type="text"/>
        </div>
    )
}