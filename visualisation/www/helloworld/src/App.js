import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const message = "yoza"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {message}
        </p>
        <Welcome></Welcome>
      </div>
    );
  }
}

class Welcome extends App{
    render(){
        return(
            <div>
                <p>Learning ReactJS</p>
            </div>
        )
    }
}
export default App;
