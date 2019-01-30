import React, { Component } from 'react';

import PersonList from './components/PersonList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>This is the person list</h1>
        <PersonList/>
        <h2>I created this using React, Axios, and the JSON placeholder api.</h2>
      </div>
    );
  }
}

export default App;