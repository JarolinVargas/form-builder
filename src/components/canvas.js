import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import BuilderContainer from '../builder-state';

export default class Canvas extends Component {
    render() {
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <form id="fb-canvas" className={`formulator ${BSC.state.activeTool}`} style={{fontSize: BSC.state.generalFontSize}}>
                        {BSC.state.canvas}
                    </form>
                )}
            </Subscribe>
        )
    }
}