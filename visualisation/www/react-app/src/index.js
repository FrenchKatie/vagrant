//telling it that we want to import react and component packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form.js';

//component - things that are changing
class App extends Component {

    constructor (props) {
        super(props);
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
            ],
            text: "Hello World",
            jumboClass: "jumbotron text-center",
            darkTheme: true
        }
        this.changeText = this.changeText.bind(this);
        this.addNewItemToList = this.addNewItemToList.bind(this);
    }

    render () {
        //inside the return is where you write JSX
        //the component needs a parent div every time
        return (
            <div>
                <div className={this.state.jumboClass}>
                    <h1 className="display-4">Shopping List</h1>
                    <h3>{this.state.text}</h3>
                    <ShoppingList list = {this.state.list}/>
                    <hr/>
                    <Form addNew= {this.addNewItemToList}/>
                    <button onClick={this.changeText} >Change state of h3</button>
                </div>
            </div>
        )
    }
    changeText(e){
        e.preventDefault();
        this.setState({
            text: "Button has been clicked",
            darkTheme: !this.state.darkTheme
        });

        if (this.state.darkTheme === true) {
            this.setState({
                jumboClass: "jumbotron text-center jumbodark"
            });
        } else {
            this.setState({
                jumboClass: "jumbotron text-center"
            });
        }
    }

    addNewItemToList(item){
        var newItem = {
            id: this.state.list.length + 1,
            item: item
        }
        this.setState({
            list: this.state.list.concat(newItem)
        })
    }
}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.list.map(product => {
                            return <li key={product.id} product={product} className="list-group-item">{product.item}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
