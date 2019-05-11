import React, {Component} from 'react';
import {Provider} from 'unstated';
import Tools from './components/tools';
import Canvas from './components/canvas';
import './form-builder.css';

export default class FormBuilder extends Component {
  render() {
    return (
      <Provider>
        <Tools></Tools>
        <Canvas></Canvas>
      </Provider>
    );
  }
}