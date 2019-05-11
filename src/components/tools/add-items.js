import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import {ItemsIndex} from '../../output-resources/items-index';
import BuilderContainer from '../../builder-state';
import itemsSprite from '../../img/items-banners-svg/items-banners-sprite.svg';

let itemsBanners = []; // Store items banners

export default class AddItemTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredItem: null,
            itemsListReady: false
        }
    }

    componentWillMount() {
        // Add items banners
        const itemsIndexKeys = Object.keys(ItemsIndex);
        for( const item of itemsIndexKeys ) {
            const id = ItemsIndex[item].id;
            itemsBanners.push(<ItemBanner key={id} itemId={id}></ItemBanner>);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show === nextProps.show && this.state === nextState ? false : true;
    }

    render() {
        return (
            <div className={this.props.show ? 'fb-show-tool-panel' : null}>
                <div className="fb-tool-panel-spacing">
                    {!itemsBanners.length ? <div className="fb-loading-indicator">Loading Items...</div> : itemsBanners}
                </div>
            </div>
        );
    }
}


// Item banner
const ItemBanner = (props) => {
    return (
        <Subscribe to={[BuilderContainer]}>
            {BSC => (
                <div className="fb-item-banner" onClick={() => BSC.canvasModInsert(props.itemId)}>
                    <svg width="100%" height="100%">
                        <use href={`${itemsSprite}#${props.itemId}`} />
                    </svg>
                </div>
            )}
        </Subscribe>
    )
}