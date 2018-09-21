import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
import Bowoffice from './Bowoffice';

const word = "5910110358";
const bow = "Engineering";
class App extends Component {
  render() {
    return (
    <div className="activecard">
    <WordCard value={word}/>
    <Bowoffice value={bow}/>
    </div>
    );
   }
 }
export default App;
