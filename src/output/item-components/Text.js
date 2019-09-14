import React from 'react';

export default function Heading(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <h1 contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur} data-text-prop='text' onDoubleClick={props.itemDoubleClick}>{props.text}</h1>
    );
}