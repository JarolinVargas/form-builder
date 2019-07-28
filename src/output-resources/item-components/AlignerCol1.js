import React from 'react';
import './Aligners.scss';

export default function AlignerCol1(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <div className={`f-aligners col-1 ${outlineClass}`} onClick={props.itemClick} onDoubleClick={props.itemDoubleClick}>
            <div className="f-aligners-lf-margin">
                <div className="f-aligners-col fb-empty-section" onClick={(section) => props.sectionClick("section1")} onMouseEnter={() => props.sectionHover(true)} onMouseLeave={() => props.sectionHover(false)}>{props.section1}</div>
            </div>
        </div>
    );
}