import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from '/Person/Person'

const message = "yoza"

class App extends Component {
  render() {
    return React.createElement("div", null, React.createElement("h1", null, "This is a react app"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
  }
}
export default App;
