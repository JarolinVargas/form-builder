import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import BuilderContainer from '../builder-state';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faToggleOn, faToggleOff, faCircle, faDotCircle, faSquare, faCheckSquare, faInfo, faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faToggleOn, faToggleOff, faCircle, faDotCircle, faSquare, faCheckSquare, faInfo, faBars);

// Text input field
export class InputTextField extends Component {
    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        const defaultStyleOff = this.props.defaultStyleOff ? "fb-default-style-off" : null; // Remove default padding, box shadow, background styles
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-input-textfield-container ${marginBottom30} ${defaultStyleOff}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        {this.props.options.map((option, index) => {
                            const stateProp = option.stateProp;
                            return (
                                <div className="fb-input-textfield-ui" key={index}>
                                    <label>
                                        <span>{option.label}</span>
                                        <input type="text" value={BSC.state[stateProp]} onChange={(event) => BSC.inputTextFieldChange(event, stateProp)}/>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Toggle switch
export class ToggleSwitch extends Component {
    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-toggle-switch-container ${marginBottom30}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        {this.props.options.map((option, index) => {
                            const stateProp = option.stateProp;
                            const switchChecked = BSC.state[stateProp] === true ? true : false;
                            const switchIcon = switchChecked === true ? 'toggle-on' : 'toggle-off'; // FontAwesome switch icon
                            return (
                                <div key={index}>
                                    <div className="fb-toggle-switch-label">{option.label}</div>
                                    <label className="fb-toggle-switch">
                                        <FontAwesomeIcon icon={switchIcon} className={`fb-${switchIcon}`} />
                                        <input type="checkbox" name="test" checked={switchChecked} onChange={(event) => BSC.toggleSwitchChange(event, stateProp)}/>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Range input
export class RangeInput extends Component {
    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-range-input-container ${marginBottom30}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        {this.props.options.map((option, index) => {
                            const stateProp = option.stateProp;
                            return (
                                <div key={index}>
                                    <label><span className="fb-range-label">{option.label}</span><span className="fb-range-value">{BSC.state.generalFontSize}</span></label>
                                    <input type="range" className="fb-custom-range" min={option.min} max={option.max} value={BSC.state[stateProp]} onChange={(event) => BSC.rangeInputChange(event, stateProp)}/>
                                </div>
                            )
                        })}
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Input and radio menu
export class InputRadioOptions extends Component {
    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-radio-options-container ${marginBottom30}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        <div className="fb-checkbox-radio-container">
                            {this.props.options.map((option, index) => {
                                const stateProp = option.stateProp;
                                const radioChecked = BSC.state[stateProp] === option.value ? true : false;
                                const radioIcon = radioChecked === true ? 'dot-circle' : 'circle';
                                return (
                                    <label key={index}>
                                        <div className="fb-input-container">
                                            <FontAwesomeIcon icon={radioIcon}/>
                                            <input type="radio" value={option.value} name={stateProp} checked={radioChecked} onChange={(event) => BSC.inputRadioOptionsChange(event, stateProp)}/>
                                        </div>
                                        <div className="fb-value-container fb-value-content-text">{option.label}</div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Input and checkbox menu
export class InputCheckboxOptions extends Component {
    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        const defaultStyleOff = this.props.defaultStyleOff ? "fb-default-style-off" : null; // Remove default padding, box shadow, background styles
        const inline = this.props.inline ? "checkbox-radio-inline" : null; // Inline style showing items per row
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-radio-options-container ${marginBottom30} ${defaultStyleOff}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        <div className={`fb-checkbox-radio-container ${inline}`}>
                            {this.props.options.map((option, index) => {
                                const stateProp = option.stateProp;
                                const checkboxChecked = option.checked;
                                const checkboxIcon = checkboxChecked ? 'check-square' : 'square';
                                return (
                                    <label key={index}>
                                        <div className="fb-input-container">
                                            <FontAwesomeIcon icon={checkboxIcon}/>
                                            <input type="checkbox" name="test" checked={checkboxChecked} onChange={console.log('test')}/>
                                        </div>
                                        <div className="fb-value-container fb-value-content-text">{option.label}</div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Colors menu
export class ColorsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeableColors: [
                {label: 'Input fields', stateProp: '', checked: true},
                {label: 'Input fields focus', stateProp: '', checked: true},
                {label: 'Buttons', stateProp: '', checked: true},
                {label: 'Font icons', stateProp: '', checked: true}
            ]
        }
    }

    checkboxChange = (index) => {
        /*  Get changeable colors state object
            get clicked checkbox object based on index and toggle checked property boolean
            set new changeableColors object with modified checked property */
        const changeableColorsArr = this.state.changeableColors;
        changeableColorsArr[index].checked = changeableColorsArr[index].checked === true ? false : true;
        this.setState({changeableColors: changeableColorsArr});
    }

    getCheckedBoxes = () => {
        return this.state.changeableColors.filter(color => color.checked === true);
    }

    render() {
        const marginBottom30 = this.props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <div className={`fb-colors-menu-container ${marginBottom30}`} onMouseEnter={() => BSC.actionInfo(this.props.actionInfo)}>
                        <div className="fb-checkbox-radio-container fb-bottom-border-spacing-15">
                            {this.state.changeableColors.map((option, index) => {
                                const checkboxChecked = option.checked;
                                const checkboxIcon = checkboxChecked ? 'check-square' : 'square';
                                return (
                                    <label key={index}>
                                        <div className="fb-input-container">
                                            <FontAwesomeIcon icon={checkboxIcon}/>
                                            <input type="checkbox" name="test" checked={checkboxChecked} onChange={() => this.checkboxChange(index)}/>
                                        </div>
                                        <div className="fb-value-container fb-value-content-text">{option.label}</div>
                                    </label>
                                )
                            })}
                        </div>
                        <div className="fb-colors-menu">
                            <div style={{backgroundColor: '#FF4E50'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#464646'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#30BCED'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#E34D32'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#FF4E50'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#30BCED'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#464646'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                            <div style={{backgroundColor: '#E34D32'}} onClick={(event) => BSC.colorsMenuChangeColor(event, this.getCheckedBoxes())}></div>
                        </div>
                    </div>
                )}
            </Subscribe>
        )
    }
}


// Sortable
export class Sortable extends Component {
    constructor(props) {
        super(props);
        this.sortableItem = null;
        this.sortableContainer = null;
        this.state = {
            sortableItemsArr: this.props.items
        }
    }

    componentWillMount = () => {
        this.sortableItem = sortableElement(({value, itemIndex, BSC}) => { // Sortable list items
            return (
                <li onMouseEnter={() => BSC(itemIndex, true)} onMouseLeave={() => BSC(itemIndex, false)}>
                    <div className="fb-sortable-label">
                        <span className="fb-sortable-handle"><FontAwesomeIcon icon="bars"/></span>
                        <span className="fb-sortable-itemname">{value.type.name}</span>
                    </div>
                </li>
            );
        });
        this.sortableContainer = sortableContainer(({children}) => { // Sortable items container
            return <ul className="fb-sortable">{children}</ul>;
        })
    }

    componentDidUpdate = () => {
        if( this.state.sortableItemsArr.length !== this.props.items.length ) {
            this.setState({
                sortableItemsArr: this.props.items
            })
        }
    }

    moveItem = (sortIndex) => {
        this.setState({
            sortableItemsArr: arrayMove(this.state.sortableItemsArr, sortIndex.oldIndex, sortIndex.newIndex)
        })
    }

    render() {
        const [SortableContainer, SortableItem] = [this.sortableContainer, this.sortableItem];
        if( SortableContainer !== null && SortableItem !== null ) {
            return (
                <Subscribe to={[BuilderContainer]}>
                    {BSC => (
                        <SortableContainer lockAxis="y" helperClass="fb-sortable-helper" lockToContainerEdges={true} onSortEnd={(sortIndex) => { BSC.canvasModSort(sortIndex); this.moveItem(sortIndex) }}>
                            {this.state.sortableItemsArr.map((value, index) => (
                                <SortableItem key={`item-${index}`} index={index} value={value} itemIndex={index} BSC={BSC.outlineItem} />
                            ))}
                        </SortableContainer>
                    )}
                </Subscribe>
            )
        } else {
            return false;
        }
    }
}


// Font family
export class FontFamily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fonts: null
        }
    }

    componentDidMount = () => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyATnX-ZcSuHIUrn8fVyijUdpSJ8aNsMBd0');
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                this.setState({fonts: xhr.response.items});
            }
        }
        xhr.send();
    }

    loadFonts = () => {
        return this.state.fonts.splice(0, 10).map(f => {
            const name = f.family.replace(' ', '+');
            return (
                <React.Fragment>
                    <li style={{fontFamily: f.family}}>
                        <h4>{f.family}</h4>
                        <p>Lorem ipsum dolor sit amet contentour</p>
                        <link href={`https://fonts.googleapis.com/css?family=${name}`} rel="stylesheet" property="stylesheet"/>
                    </li>
                </React.Fragment>
            )
        });
    }

    selectFont = (event) => {
        console.log(event.currentTarget)
    }

    fontsScrolling = (event) => {
        const el = event.target;
        if( el.scrollHeight - el.scrollTop === el.clientHeight ) {
            console.log('load next fonts');
        }
    }

    render() {
        let fontItems;
        if( this.state.fonts !== null ) {
            fontItems = this.loadFonts();
        }

        return (
            <div className="fb-font-family-container">
                <InputCheckboxOptions defaultStyleOff options={[{label: 'Raleway', value: 'Raleway', stateProp: 'fontFamily', checked: true}]}/>
                <InputTextField defaultStyleOff options={[{label: 'search fonts', stateProp: ''}]} actionInfo="Change general preview appearance" label="Form width (px/%)"/>
                <ul className="fb-scrollable-content fb-font-family-fonts-list custom-scrollbar" onClick={this.selectFont} onScroll={this.fontsScrolling} style={{height: 200}}>
                    {fontItems}
                </ul>
                <InputCheckboxOptions defaultStyleOff inline options={[
                    {label: '400', value: '400', stateProp: 'targetAttr', checked: true},
                    {label: '500', value: '500', stateProp: 'targetAttr'},
                    {label: '600', value: '600', stateProp: 'targetAttr'},
                    {label: '700', value: '700', stateProp: 'targetAttr'},
                    {label: '800', value: '800', stateProp: 'targetAttr'},
                    {label: '900', value: '900', stateProp: 'targetAttr'}
                ]}/>
            </div>
        )
    }
}


// Button
export function ActionButton(props) {
    return (
        <span className="fb-action-button" onClick={props.onClick}>{props.label}</span>
    )
}


// Info cell component used to display instructions and info text
export function InfoCell(props) {
    const marginBottom30 = props.marginBottom30 ? "fb-margin-bottom-30" : null; // Bottom margin class
    return (
        <div className={`fb-items-settings-container ${marginBottom30}`}>
            <div className="fb-tools-info-cell">
                <span><FontAwesomeIcon icon="info" />{props.infoText}</span>
            </div>
        </div>
    )
}


// UI components index
export const UIComponentsIndex = {
    InputTextField: <InputTextField marginBottom30/>,
    ToggleSwitch: <ToggleSwitch marginBottom30/>,
    RangeInput: <RangeInput/>,
    InputRadioOptions: <InputRadioOptions/>
}