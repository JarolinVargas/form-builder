import React, {Component} from 'react';
import {InfoCell, Sortable} from '../ui-components';

export default class SortTool extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.show === nextProps.show ? false : true;
    }
    
    render() {
        const canvasSortableItems = this.props.canvasState.props.children; // Get canvas children
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    <InfoCell marginBottom30 infoText="Click and drag items vertically in the canvas to change the order."/>
                    <Sortable items={canvasSortableItems}/>    
                </div>
            </div>
        );
    }
}