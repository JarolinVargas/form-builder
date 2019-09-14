import React from 'react';
import AlignerCol1 from './item-components/AlignerCol1.js';
import Heading from './item-components/Text.js';

/*  Components index. id should match item key
    set settings for individual components. */
export const ItemsIndex = {
    AlignerCol1: {
        id: 'AlignerCol1',
        tag: <AlignerCol1 section1={[]}/>,
        settings: {
            ToggleSwitch: [
                {label: 'remove top padding', target: null},
                {label: 'remove bottom padding', target: null},
                {label: 'remove margins', target: null}
            ],
            InputTextField: [
                {label: 'placeholder1', target: null},
                {label: 'placeholder2', target: null}
            ]
        }
    }
    /*H1: {
        id: 'H1',
        tag: <Heading text="Application Formss"/>,
        settings: {
            ToggleSwitch: [
                {label: 'remove top padding', target: null},
                {label: 'remove bottom padding', target: null},
                {label: 'remove margins', target: null}
            ],
            InputTextField: [
                {label: 'placeholder1', target: null},
                {label: 'placeholder2', target: null}
            ]
        }
    }*/
}