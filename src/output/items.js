import React from 'react';
import AlignerCol1 from './item-components/AlignerCol1';

// HEADERS
// Header 1
export function Header1(props) {
    return (
        <AlignerCol1 outlineItem={props.outlineItem} itemClick={props.itemClick} itemDoubleClick={props.itemDoubleClick}>
            <h1 contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur} data-text-prop='text1'>{props.text1}</h1>
            <p contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur} data-text-prop='text2'>{props.text2}</p>
        </AlignerCol1>
    );
}