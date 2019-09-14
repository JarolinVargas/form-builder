import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import BuilderContainer from '../../builder-state';
import {ItemsIndex} from '../../output/items-index';
import {UIComponentsIndex, InputTextField, ToggleSwitch, RangeInput, InputRadioOptions, InfoCell} from '../ui-components';

export default class SettingsTool extends Component {
    /* 
        Set general form settings.
        Object is passed to ui components as prop
        You can provide the options and values, as well as target for the components rendered in the general form options
        stateProp is the property that will be modified in the canvas state stored in builder-state.js
    */
    generalSettings = {
        inputTextOptions: [
            {label: 'action', stateProp: 'actionAttr'},
            {label: 'name', stateProp: 'nameAttr'},
            {label: 'accept-charset', stateProp: 'charsetAttr'}
        ],
        toggleSwitchOptions: [
            {label: 'autocomplete', stateProp: 'autocompleteAttr'},
            {label: 'reCAPTCHA', stateProp: 'reCaptcha'}
        ],
        InputRadioCheckboxOptions: {
            method: [
                {label: 'post', value: 'post', stateProp: 'methodAttr'},
                {label: 'get', value: 'get', stateProp: 'methodAttr'}
            ],
            target: [
                {label: '_self', value: '_self', stateProp: 'targetAttr'},
                {label: '_blank', value: '_blank', stateProp: 'targetAttr'},
                {label: '_parent', value: '_parent', stateProp: 'targetAttr'},
                {label: '_top', value: '_top', stateProp: 'targetAttr'}
            ]
        }
    }

    getActiveItemsSettings = (activeItem) => {
        /*
            Loop through items settings,
            Get option key to get settings component from UIComponentsIndex
            Clone component and add options prop from settings in componentsindex
        */
        const itemSettings = ItemsIndex[activeItem[1]].settings;
        const itemSettingsEntries = Object.entries(itemSettings);
        let itemSettingsComp = [];
        for( const key of itemSettingsEntries ) {
            const UIComponentClone = React.cloneElement(UIComponentsIndex[key[0]], {
                options: key[1],
                key: `${key[0]}-${new Date().getTime()}`
            });
            itemSettingsComp.push(UIComponentClone);
        }
        return itemSettingsComp;
    }

    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }
    
    render() {
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                        <div className="fb-tool-panel-spacing">
                            <h4 className="fb-tools-section-label">Item Settings</h4>
                            {!BSC.state.activeItem ? <InfoCell marginBottom30 infoText="Click any item in the canvas to configure its settings"/> : this.getActiveItemsSettings(BSC.state.activeItem)}
                            <h4 className="fb-tools-section-label fb-label-top-margin" style={{marginTop: "50px"}}>General Form Settings</h4>
                            <InputTextField options={this.generalSettings.inputTextOptions} marginBottom30 actionInfo="Set attribute values to the form tag"/>
                            <ToggleSwitch options={this.generalSettings.toggleSwitchOptions} marginBottom30 actionInfo="Enable and disable general form settings"/>
                            <InputRadioOptions options={this.generalSettings.InputRadioCheckboxOptions.method} marginBottom30 actionInfo="Select form method attribute value"/>
                            <InputRadioOptions options={this.generalSettings.InputRadioCheckboxOptions.target} marginBottom30 actionInfo="Select form target attribute value"/>
                        </div>
                    </div>
                )}
            </Subscribe>
        );
    }
}