import React, { Component } from 'react';
import '../styles/App.css';

import ClassQuery from './ClassQuery';
import FunctionQuery from './FunctionQuery';
import HookQuery from './HookQuery';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <ClassQuery />
        <FunctionQuery countryId="2"/>
        <HookQuery countryId="3"/>
      </div>
    );
  }
}
