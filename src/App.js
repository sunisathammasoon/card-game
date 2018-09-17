import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  x="Hello{''World''}"
  render() {
    return (
      <div className="App">
        {this.x}
      </div>
    );
  }
}

export default App;
