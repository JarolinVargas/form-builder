import React, {Component} from 'react';
import {InputTextField, ToggleSwitch, FontFamily, RangeInput, InfoCell} from '../ui-components';

export default class TextTool extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }
    
    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <InfoCell marginBottom30 infoText="Click the text to want to edit in the form canvas."/>
                    <RangeInput marginBottom30 options={[{label: 'Font Size', stateProp: 'generalFontSize', min: 12, max: 24}]} actionInfo="Adjust general font size"/>
                </div>
            </div>
        );
    }
}