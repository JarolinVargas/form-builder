import React from 'react';
import {Container} from 'unstated';
import {List} from 'immutable';
import {ItemsIndex} from './output-resources/items-index';

export default class BuilderContainer extends Container {
    /*  Prepare item to add to canvas
        Clone component and add the initial events
        If key is passed form component in itemsArr, use it; if not, generate a key */
    prepareItemsForCanvas = (itemsArr) => {
        return itemsArr.map(item => {
            const itemKey = !item.component.key ? `${item.component.type.name}-${new Date().getTime()}` : item.component.key;
            return React.cloneElement(item.component, {
                key: itemKey,
                itemClick: () => this.setActiveItem(itemKey, item.component.type.name),
                itemDoubleClick: () => this.canvasModRemove(itemKey),
                itemTextBlur: (event) => this.canvasModUpdateText(event, itemKey),
                sectionClick: (section) => this.setActiveSection(itemKey, section),
                sectionHover: (hovered) => this.sectionHover(hovered)
            })
        });
    }


    // STATE
    state = {
        activeTool: 'add-items',
        activeItem: null,
        activeSection: null,
        sortingItem: null,
        canvasHoverFocus: false,
        actionInfo: 'Click any item to add it to the form',
        // Form attributes
        actionAttr: '',
        charsetAttr: '',
        nameAttr: '',
        methodAttr: 'post',
        targetAttr: '_self',
        autocompleteAttr: false,
        // Form classes
        formInputsStyle: 'input-style-2',
        formButtonsStyle: 'buttons-style-3',
        formRoundInputs: 'round-inputs',
        // General settings
        generalFontSize: 16,
        reCaptcha: true,
        // Preview
        previewFormWidth: 1000,
        previewBodyBg: '#FFF',
        // Form canvas components
        formulatorObj: {
            canvas: [
                {
                    tag: 'AlignerCol1',
                    children: {
                        section1: [
                            {
                                tag: 'H1',
                                text: 'Hello world',
                                settings: {
                                    align: 'center'
                                }
                            }
                        ]
                    }
                }
            ]
        },
        canvas: (
            <React.Fragment>
                {this.prepareItemsForCanvas([])}
            </React.Fragment>
        )
    }


    // UI COMPONENTS STATE CHANGE
    // Active tool
    toggleActiveTool = (clickedTool) => {
        const currentTool = this.state.activeTool;
        this.setState({
            activeTool: clickedTool,
            activeItem: null,
            activeSection: null,
            canvasHoverFocus: false
        });
        this.contentEditableToggle(currentTool, clickedTool);
    }

    // Set active item when clicked if user is using corresponding 'settings' tool
    setActiveItem = (itemKey, tag) => {
        if( this.state.activeTool === 'settings' ) {
            this.setState({activeItem: [itemKey, tag]});
        }
    }

    // Set active section when clicked
    setActiveSection = (itemKey, section) => {
        this.setState({
            activeSection: [itemKey, section]
        })
    }

    // Section hovered
    sectionHover = (hovered) => {
        if( this.state.activeSection ) {
            this.setState({
                canvasHoverFocus: hovered ? false : true // if section is hovered, canvas hover is false
            })
        }
    }

    // Canvas clicked
    canvasClicked = () => {
        if( this.state.activeSection && this.state.canvasHoverFocus ) {
            this.setState({
                activeSection: null, // if section is hovered, canvas hover is false
                canvasHoverFocus: false
            })
        }
    }
    // Canvas mouse enter
    canvasMouseEnter = () => {
        if( this.state.activeSection && this.state.activeTool === 'add-items' ) {
            this.setState({
                canvasHoverFocus: true
            })
        }
    }
    // Canvas mouse leave
    canvasMouseLeave = () => {
        if( this.state.activeSection && this.state.canvasHoverFocus ) {
            this.setState({
                canvasHoverFocus: false
            })
        }
    }

    // InputTextField
    inputTextFieldChange = (event, stateProp) => {
        const val = event.target.value;
        this.setState({[stateProp]: val});
    }

    // RangeInput
    rangeInputChange = (event, stateProp) => {
        const val = parseInt(event.target.value);
        this.setState({[stateProp]: val});
    }

    // ToggleSwitch
    toggleSwitchChange = (event, stateProp) => {
        const val = event.target.checked === true ? true : false;
        this.setState({[stateProp]: val});
    }

    // inputRadioOptions
    inputRadioOptionsChange = (event, stateProp) => {
        const val = event.target.value;
        this.setState({[stateProp]: val});
    }

    // ColorsMenu change color
    colorsMenuChangeColor = (event, checkedBoxes) => {
        //console.log(event.target, checkedBoxes)
    }


    // CANVAS MODIFIERS: Modify the canvas state
    // Insert content in canvas
    canvasModInsert = (ItemId) => {
        //const item = this.prepareItemsForCanvas([{component: ItemsIndex[ItemId].tag}]);
        const formulatorObjNew = this.state.formulatorObj;
        formulatorObjNew.canvas.push({tag: ItemId})
        this.setState({
            formulatorObj: formulatorObjNew
        });
        /*const canvasItems = this.state.canvas.props.children; // Get React.Fragment children in current canvas
        const canvasItemsList = List(canvasItems); // Convert to list for modification
        let newCanvasState;
        if( !this.state.activeSection ) {
            const addItem = canvasItemsList.concat(item); // Add item to current canvasstate
            newCanvasState = addItem.toJS(); // Convert from list, back to object
        } else {
            const clickedItemIndex = canvasItems.findIndex(item => item.key === this.state.activeSection[0]);
            const itemSectionProp = this.state.activeSection[1];
            const sectionChildren = canvasItems[clickedItemIndex].props[itemSectionProp];
            sectionChildren.push(item);
            const cloneAndInsert = React.cloneElement(canvasItems[clickedItemIndex], {
                [itemSectionProp]: sectionChildren
            });
            const replaceItem = canvasItemsList.set(clickedItemIndex, cloneAndInsert);
            newCanvasState = replaceItem.toJS();
        }
        this.setState({canvas: <React.Fragment>{newCanvasState}</React.Fragment>});*/
    }

    // Remove item from canvas
    canvasModRemove = (itemKey) => {
        if( this.state.activeTool === 'remove' ) {
            const canvasItems = this.state.canvas.props.children;
            const clickedItemIndex = canvasItems.findIndex(item => item.key === itemKey); // Get index of item based on key
            const canvasItemsList = List(canvasItems);
            const removeItem = canvasItemsList.delete(clickedItemIndex); // Delete item by index
            const newCanvasState = removeItem.toJS();
            this.setState({canvas: <React.Fragment>{newCanvasState}</React.Fragment>});
        }
    }

    // Sort canvas items
    canvasModSort = (sortIndex) => {
        const [oldIndex, newIndex] = [sortIndex.oldIndex, sortIndex.newIndex];
        const canvasItems = this.state.canvas.props.children;
        const canvasItemsList = List(canvasItems);
        const movingItem = canvasItemsList.get(oldIndex); // Get item that will be moved based on oldIndex
        const sortItem = canvasItemsList.splice(oldIndex, 1).splice(newIndex, 0, movingItem); // Change order
        const newCanvasState = sortItem.toJS();
        this.setState({canvas: <React.Fragment>{newCanvasState}</React.Fragment>});
    }
    
    // TODO: BOMB THIS. Add class to canvas item such as active item, sorting item, and more.
    outlineItem = (itemIndex, toggleBool) => {
        const canvasItems = this.state.canvas.props.children;
        canvasItems[itemIndex] = React.cloneElement(canvasItems[itemIndex], { outlineItem: toggleBool }); // Replace item in array
        this.setState({canvas: <React.Fragment>{canvasItems}</React.Fragment>});
    }

    // Toggle components contenteditable when text is enabled
    contentEditableToggle = (prevTool, activeTool) => {
        if( prevTool === 'text' ) {
            this.contentEditableOn(false)
        } else if( activeTool === 'text' ) {
            this.contentEditableOn(true);
        }
    }
    contentEditableOn = (enabled) => {
        const canvasItems = this.state.canvas.props.children;
        const newCanvasState = canvasItems.map(item => {
            return React.cloneElement(item, {
                contentEditableOn: enabled
            });
        });
        this.setState({canvas: <React.Fragment>{newCanvasState}</React.Fragment>});
    }

    // Update item text on focus out when contenteditable is enabled
    canvasModUpdateText = (event, itemKey) => {
        const canvasItems = this.state.canvas.props.children;
        const itemTextProp = event.target.getAttribute('data-text-prop');
        const newText = event.target.textContent;
        const canvasItemsList = List(canvasItems);
        const itemIndex = canvasItems.findIndex(item => item.key === itemKey);
        const clonedComp = React.cloneElement(canvasItems[itemIndex], {
            [itemTextProp]: newText
        });
        const updateItem = canvasItemsList.set(itemIndex, clonedComp);
        const newCanvasState = updateItem.toJS();
        this.setState({canvas: <React.Fragment>{newCanvasState}</React.Fragment>});
    }

    // Action info
    actionInfo = (info) => {
        this.setState({actionInfo: info});
    }
}