import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import BuilderContainer from '../builder-state';

export default class Canvas extends Component {
    outlineCanvas = (activeTool, activeSection) => {
        return activeTool === 'add-items' && activeSection ? ' canvas-outline' : '';
    }
    
    outlineCanvasFocus = (canvasHoverFocus) => {
        return canvasHoverFocus ? ' canvas-outline-focus' : '';
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
                            {BSC.state.canvas}
                    </form>
                )}
            </Subscribe>
        )
    }
}