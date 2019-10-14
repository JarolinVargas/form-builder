import React from 'react';
import './Aligner.scss';

export default function Aligner(props) {
    const outlineClass = props.outlineItem === true ? 'fb-sorting-item' : '';
    return (
        <div className={`f8r-aligners f8r-col-1 ${outlineClass}`} onClick={props.itemClick} onDoubleClick={props.itemDoubleClick}>
            <div className="f8r-general-margins">
                { !props.section1 ? null : <div className={"f8r-col" + (!props.section1.length ? " fb-empty-section" : "")} onClick={(section) => props.sectionClick("section1")} onMouseEnter={() => props.sectionHover(true)} onMouseLeave={() => props.sectionHover(false)}>{props.section1}</div> }
                { !props.section2 ? null : <div className={"f8r-col" + (!props.section2.length ? " fb-empty-section" : "")} onClick={(section) => props.sectionClick("section2")} onMouseEnter={() => props.sectionHover(true)} onMouseLeave={() => props.sectionHover(false)}>{props.section2}</div> }
                { !props.section3 ? null : <div className={"f8r-col" + (!props.section3.length ? " fb-empty-section" : "")} onClick={(section) => props.sectionClick("section3")} onMouseEnter={() => props.sectionHover(true)} onMouseLeave={() => props.sectionHover(false)}>{props.section3}</div> }
            </div> 
        </div>
    );
}