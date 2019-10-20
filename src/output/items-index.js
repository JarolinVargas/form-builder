import React from 'react';
import Aligner from './items/Aligners.js';
import Input from './items/Input.js';
import Text from './items/Text.js';

/*  Components index. id should match item key
    set settings for individual components. */
export const ItemsIndex = {
    Aligner: {
        id: 'Aligner',
        tag: <Aligner section1={[]}/>,
        rejectIds: ['Aligner', 'AlignerCol2', 'AlignerCol3'],
        settings: {
            ToggleSwitch: [
                {label: 'left & right margins', target: null},
                {label: 'top border', target: null},
                {label: 'bottom border', target: null}
            ],
            InputTextField: [
                {label: 'placeholder1', target: null},
                {label: 'placeholder2', target: null}
            ],
            RangeInput: [
                {label: 'top padding', target: null},
                {label: 'bottom padding', target: null}
            ]
        }
    },
    AlignerCol2: {
        id: 'AlignerCol2',
        tag: <Aligner section1={[]} section2={[]}/>
    },
    AlignerCol3: {
        id: 'AlignerCol3',
        tag: <Aligner section1={[]} section2={[]} section3={[]}/>
    },
    AlignerCol4: {
        id: 'AlignerCol4',
        tag: <Aligner section1={[]} section2={[]} section3={[]} section4={[]}/>
    },
    Input: {
        id: 'Input',
        tag: <Input label="Input label"/>,
        settings: {
            ToggleSwitch: [
                {label: 'remove top padding', target: null},
                {label: 'remove bottom padding', target: null},
                {label: 'remove margins', target: null}
            ],
            InputTextField: [
                {label: 'placeholder1', target: null},
                {label: 'placeholder2', target: null}
            ],
            InputRadioOptions: [
                {label: 'text', target: null},
                {label: 'password', target: null},
                {label: 'date', target: null},
                {label: 'email', target: null},
                {label: 'file', target: null},
            ]
        }
    },
    Text: {
        id: 'Text',
        tag: <Text text="something along the way and their is also another person who"/>,
        settings: { 
            InputRadioOptions: [
                {label: 'p', target: null},
                {label: 'span', target: null},
                {label: 'em', target: null},
                {label: 'small', target: null},
                {label: 'h1', target: null},
                {label: 'h2', target: null},
                {label: 'h3', target: null},
                {label: 'h4', target: null},
                {label: 'h5', target: null},
                {label: 'h6', target: null},
            ]
        }
    }
}