import React, {Component} from 'react';
import {InfoCell, InputTextField, ActionButton} from '../ui-components';

export default class PreviewTool extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }
    
    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <InputTextField options={[{label: 'form width', stateProp: 'previewFormWidth'},{label: 'body background color', stateProp: 'previewBodyBg'}]} actionInfo="Change general preview appearance" label="Form width (px/%)" marginBottom30/>
                    <ActionButton label="PREVIEW FORM"/>          
                </div>
            </div>
        );
    }
}