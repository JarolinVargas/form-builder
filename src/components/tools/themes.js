import React, {Component} from 'react';
import {InputTextField, ToggleSwitch, RangeInput, InfoCell, InputRadioOptions, ColorsMenu} from '../ui-components';

export default class ThemesTool extends Component {
    themesSettings = {
        inputRadioCheckboxOptions: {
            inputStyleOptions: [
                {label: <input type="text" className="ui-style-input"/>, value: 'input-style-1', stateProp: 'formInputsStyle'},
                {label: <input type="text" className="ui-style-input"/>, value: 'input-style-2', stateProp: 'formInputsStyle'},
                {label: <input type="text" className="ui-style-input"/>, value: 'input-style-3', stateProp: 'formInputsStyle'},
                {label: <input type="text" className="ui-style-input"/>, value: 'input-style-4', stateProp: 'formInputsStyle'},
                {label: <input type="text" className="ui-style-input"/>, value: 'input-style-5', stateProp: 'formInputsStyle'}
            ],
            buttonsStyleOptions: [
                {label: <button>Style</button>, value: 'buttons-style-1', stateProp: 'formButtonsStyle'},
                {label: <button>Style</button>, value: 'buttons-style-2', stateProp: 'formButtonsStyle'},
                {label: <button>Style</button>, value: 'buttons-style-3', stateProp: 'formButtonsStyle'},
                {label: <button>Style</button>, value: 'buttons-style-4', stateProp: 'formButtonsStyle'},
                {label: <button>Style</button>, value: 'buttons-style-5', stateProp: 'formButtonsStyle'}
            ]
        },
        toggleSwitchOptions: [
            {label: 'round input fields', stateProp: 'formRoundInputs'}
        ],
        rangeOptions: [
            {label: 'Items Spacing', target: null}
        ]
    }

    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }
    
    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <ColorsMenu marginBottom30 actionInfo="Select the form properties and click a color to change"/>
                    <InputRadioOptions options={this.themesSettings.inputRadioCheckboxOptions.inputStyleOptions} marginBottom30 actionInfo="Select inputs style"/>
                    <InputRadioOptions options={this.themesSettings.inputRadioCheckboxOptions.buttonsStyleOptions} marginBottom30 actionInfo="Select buttons style"/>
                    <ToggleSwitch options={this.themesSettings.toggleSwitchOptions} marginBottom30 actionInfo="Enable or disable general form styles"/>
                    <RangeInput options={[{label: 'Items Spacing', stateProp: 'generalFontSize', min: 0, max: 100}]} actionInfo="Adjust spacing between items"/>
                </div>
            </div>
        );
    }
}