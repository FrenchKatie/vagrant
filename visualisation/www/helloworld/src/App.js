import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

const message = "yoza"

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
            </header>
            <Person name="Katie" age="22"/>
            <Person name="Sean" age="20"/>
            <Person name="Anna" age="18"/>
            <Person name="Ben" age="16"/>
        </div>
    )

  }
}
export default App;
