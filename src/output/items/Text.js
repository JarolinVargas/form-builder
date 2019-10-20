import React from 'react';
import './Text.scss';

export default function Text(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <p contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur} data-text-prop='text' onClick={props.itemClick} onDoubleClick={props.itemDoubleClick}>{props.text}</p>
    );
}