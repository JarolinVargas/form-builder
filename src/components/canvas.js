import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import {ItemsIndex} from '../output-resources/items-index';
import BuilderContainer from '../builder-state';

export default class Canvas extends Component {
    outlineCanvas = (activeTool, activeSection) => {
        return activeTool === 'add-items' && activeSection ? ' canvas-outline' : '';
    }
    
    outlineCanvasFocus = (canvasHoverFocus) => {
        return canvasHoverFocus ? ' canvas-outline-focus' : '';
    }

    canvasAssembler = (formulatorObj) => {
        /*
            create a pointer that references whats changed in the object.
            when an element is inserted, change will be applied directly and updated in the formulatorObj
            but loop will not run renderin every component again
            funciton that takes previous formulatorObj and new formulatorObj to see changes can allow pointer to be created that target and updates tree directly
        */
        let canvas = [];
        const components = formulatorObj.canvas;
        for( let i = 0; i < components.length; i++ ) {
            const indexedComp = ItemsIndex[components[i].tag];
            const tag = indexedComp.tag;
            canvas.push(React.cloneElement(tag, {
                key: i
            }));
        }
        return canvas;
    }

    render() {
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <form
                        id="fb-canvas"
                        className={`formulator ${BSC.state.activeTool}${this.outlineCanvas(BSC.state.activeTool, BSC.state.activeSection)}${this.outlineCanvasFocus(BSC.state.canvasHoverFocus)}`}
                        onClick={BSC.canvasClicked}
                        onMouseEnter={BSC.canvasMouseEnter}
                        onMouseLeave={BSC.canvasMouseLeave}
                        style={{fontSize: BSC.state.generalFontSize}}>
                            {this.canvasAssembler(BSC.state.formulatorObj)}
                    </form>
                )}
            </Subscribe>
        )
    }
}