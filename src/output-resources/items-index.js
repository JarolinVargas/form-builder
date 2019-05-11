import React from 'react';
import {Header1} from './items.js';

/*  Components index. id should match item key
    set settings for individual components. */
export const ItemsIndex = {
    Header1: {
        id: 'Header1',
        tag: <Header1 text1="Application Form" text2="Lorem ipsum dolor dit amet" text3="Test"/>,
        settings: {
            ToggleSwitch: [
                {label: 'Heading', target: null},
                {label: 'Paragraph', target: null}
            ],
            InputTextField: [
                {label: 'placeholder1', target: null},
                {label: 'placeholder2', target: null}
            ]
        }
    }
}