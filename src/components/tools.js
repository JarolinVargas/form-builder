import React, {Component} from 'react';
import {Subscribe} from 'unstated';
import BuilderContainer from '../builder-state';
import AddItemTool from './tools/add-items';
import SettingsTool from './tools/settings';
import TextTool from './tools/text';
import ThemesTool from './tools/themes';
import SortTool from './tools/sort';
import RemoveTool from './tools/remove';
//import PreviewTool from './tools/preview';
import ImportTool from './tools/import';
import ExportTool from './tools/export';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faPalette, faFont, faSort, faCogs, faTimes, faEye, faDownload, faUpload, faSlidersH} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faPalette, faFont, faSort, faCogs, faTimes, faEye, faDownload, faUpload, faSlidersH);

// Action info text
const [IAddItems, ISettings, IText, IThemes, ISort, IRemove, IImport, IExport] = [
    'Click any item to add it to the form',
    'Configure items and general form settings',
    'Edit text and customize typography',
    'Customize form appearance',
    'Change the order of items and inputs',
    'Double click any item to remove it',
    'Preview the form',
    'Import existing form file',
    'Export and download the form source code'
]

// Tools buttons
export default class Tools extends Component {
    render() {
        const toolActiveClass = 'fb-tool-btn-active';
        return (
            <Subscribe to={[BuilderContainer]}>
                {BSC => (
                    <aside id="fb-tools">
                        <span id="fb-action-info">{BSC.state.actionInfo}</span>
                        <ul id="fb-tools-buttons" onMouseLeave={() => BSC.actionInfo(null)}>
                            <li onClick={() => BSC.toggleActiveTool('add-items')} onMouseEnter={() => BSC.actionInfo(IAddItems)} className={BSC.state.activeTool === 'add-items' ? toolActiveClass : null}><FontAwesomeIcon icon="plus" /></li>
                            <li onClick={() => BSC.toggleActiveTool('settings')} onMouseEnter={() => BSC.actionInfo(ISettings)} className={BSC.state.activeTool === 'settings' ? toolActiveClass : null}><FontAwesomeIcon icon="sliders-h" /></li>
                            <li onClick={() => BSC.toggleActiveTool('text')} onMouseEnter={() => BSC.actionInfo(IText)} className={BSC.state.activeTool === 'text' ? toolActiveClass : null}><FontAwesomeIcon icon="font" /></li>
                            <li onClick={() => BSC.toggleActiveTool('themes')} onMouseEnter={() => BSC.actionInfo(IThemes)} className={BSC.state.activeTool === 'themes' ? toolActiveClass : null}><FontAwesomeIcon icon="palette" /></li>
                            <li onClick={() => BSC.toggleActiveTool('sort')} onMouseEnter={() => BSC.actionInfo(ISort)} className={BSC.state.activeTool === 'sort' ? toolActiveClass : null}><FontAwesomeIcon icon="sort" /></li>
                            <li onClick={() => BSC.toggleActiveTool('remove')} onMouseEnter={() => BSC.actionInfo(IRemove)} className={BSC.state.activeTool === 'remove' ? toolActiveClass : null}><FontAwesomeIcon icon="times" /></li>
                            {/*<li onClick={() => BSC.toggleActiveTool('preview')} onMouseEnter={() => BSC.actionInfo(IPreview)} className={BSC.state.activeTool === 'preview' ? toolActiveClass : null} data-tools-after-bottom><FontAwesomeIcon icon="eye" /></li>*/}
                            <li onClick={() => BSC.toggleActiveTool('import')} onMouseEnter={() => BSC.actionInfo(IImport)} className={BSC.state.activeTool === 'import' ? toolActiveClass : null} data-tools-after-bottom><FontAwesomeIcon icon="upload" /></li>
                            <li onClick={() => BSC.toggleActiveTool('export')} onMouseEnter={() => BSC.actionInfo(IExport)} className={BSC.state.activeTool === 'export' ? toolActiveClass : null}><FontAwesomeIcon icon="download" /></li>
                        </ul>
                        <div id="fb-tools-ui" className="custom-scrollbar">
                            <ToolsUIPanel builderState={BSC.state}></ToolsUIPanel>
                        </div>
                    </aside>
                )}
            </Subscribe>
        );
    }
}

// Tools UI panel
class ToolsUIPanel extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.builderState.activeTool === nextProps.builderState.activeTool ? false : true;
    }

    render() {
        const activeTool = this.props.builderState.activeTool;
        return (
            <React.Fragment>
                <AddItemTool show={activeTool !== 'add-items' ? false : true} />
                <SettingsTool show={activeTool !== 'settings' ? false : true} />
                <TextTool show={activeTool !== 'text' ? false : true} />
                <ThemesTool show={activeTool !== 'themes' ? false : true} />
                <SortTool show={activeTool !== 'sort' ? false : true} canvasState={this.props.builderState.canvas} />
                <RemoveTool show={activeTool !== 'remove' ? false : true} />
                {/*<PreviewTool show={activeTool !== 'preview' ? false : true} />*/}
                <ImportTool show={activeTool !== 'import' ? false : true} />
                <ExportTool show={activeTool !== 'export' ? false : true} canvasState={this.props.builderState.canvas} />
            </React.Fragment>
        );
    }
}