import React from 'react';
import AlignerCol1 from './item-components/AlignerCol1';

// HEADERS
// Header 1
export function Header1(props) {
    return (
        <AlignerCol1 outlineItem={props.outlineItem} itemClick={props.itemClick} itemDoubleClick={props.itemDoubleClick}>
            <h1 contentEditable={props.contentEditableOn} onBlur={props.itemTextBlur}>Contact Us Today!</h1>
        </AlignerCol1>
    );
}