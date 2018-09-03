import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }

constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     items: []
   };
 }

 componentDidMount() { //succesful render = component has mounted
   fetch("https://my.api.mockaroo.com/users.json?key=eeded340")
     .then(res => res.json()) //turn response into json if it isnt
     .then(
       (result) => { //what comes back - succesful api connection
         this.setState({
           isLoaded: true,
           items: result
         });
       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => { //if there isnt a succesful result
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
 }

 render() {
   const { error, isLoaded, items } = this.state;
   if (error) { //return error message to user if error
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) { //if still loading
     return <div>Loading...</div>;
   } else { //if loaded
     return (
       <ul>
         {items.map(item => (
           <li key={item.first_name}>
             {item.first_name} {item.last_name}
           </li>
         ))}
       </ul>
     );
   }
 }
}



export default App;
