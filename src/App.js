import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';


const word = "Hello";
class App extends Component {
  render() {
    return (
    <div className="activeCard">
    <WordCard value={word}/>
    </div>
    );555
   }
   
}


export default App;
