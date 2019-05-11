import React from 'react';
import './AlignerCol1.scss';

export default function AlignerCol1(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <div className={`f-aligners col-1 ${outlineClass}`} onClick={props.itemClick} onDoubleClick={props.itemDoubleClick}>
            <div className="f-aligners-lf-margins">
                {props.children}
            </div>
        </div>
    );
}