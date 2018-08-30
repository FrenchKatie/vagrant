//telling it that we want to import react and component packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form.js';

//component - things that are changing
class App extends Component {

    constructor () {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    item: "Apples"
                },
                {
                    id: 2,
                    item: "Pears"
                },
                {
                    id: 3,
                    item: "Bananas"
                }
            ]
        }
    }

    render () {
        //inside the return is where you write JSX
        //the component needs a parent div every time
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-4">Shopping List</h1>
                    <ShoppingList list = {this.state.list}/>
                    <hr/>
                    <Form/>
                </div>
            </div>
        )
    }
}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.list.map(product => {
                            return <li className="list-group-item">{product.item}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
