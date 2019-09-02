import React, {Component} from 'react';
import {InfoCell, ActionButton} from '../ui-components';

export default class ExportTool extends Component {
    export = () => {
        //console.log(this.props.canvasState.props.children)
    }

    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <InfoCell marginBottom30 infoText="If you exported a form, import it's json file to make changes."/>
                    <ActionButton label="EXPORT FORM" onClick={this.export}/>   
                </div>
            </div>
        )
    }
}