import React from 'react';
import './Aligners.scss';

export function H1(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <h1 contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur} data-text-prop='text' onDoubleClick={props.itemDoubleClick}>{props.text}</h1>
    );
}