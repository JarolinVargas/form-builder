import React from 'react';
import Aligner from './items/Aligners.js';
import Input from './items/Input.js';

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
    Input: {
        id: 'Input',
        tag: <Input/>,
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
}