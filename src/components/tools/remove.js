import React, {Component} from 'react';
import {InfoCell} from '../ui-components';

export default class RemoveTool extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }

    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <InfoCell marginBottom30 infoText="Double click any item in the canvas to remove it."/>                   
                </div>
            </div>
        );
    }
}