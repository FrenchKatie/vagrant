
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
            darkTheme: true,
            editID: 0,
            buttonText: "Add new item",
            editingValue:""
        }

        //you must bind everything that changes on the page
        this.changeText = this.changeText.bind(this);
        this.addNewItemToList = this.addNewItemToList.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    render () {
        //inside the return is where you write JSX
        //the component needs a parent div every time
        return (
            <div>
                <div className={this.state.jumboClass}>
                    <h1 className="display-4">Shopping List</h1>
                    <h3>{this.state.text}</h3>
                    <ShoppingList
                        list = {this.state.list}
                        editItem={this.handleEdit}
                    />
                    <hr/>
                    <Form
                        addNew = {this.addNewItemToList}
                        {...this.state}
                        updateItem = {this.handleUpdate}
                        changeText = {this.handleChangeText}
                    />
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

    handleEdit(itemToEdit){
        this.setState({
            editID: itemToEdit.id,
            buttonText: "Editing item",
            editingValue: itemToEdit.item
        })
    }

    handleDelete(){

    }

    handleUpdate(updatedItem){
        var allItems = this.state.list;
        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].id === updatedItem.id) {
                allItems[i].item = updatedItem.item;
                break;
            }
        }
        this.setState({
            list: allItems,
            editID: 0,
            buttonText: "Add new item",
            editingValue: ""
        })
    }

    handleChangeText(inputValue){
        this.setState({
            editingValue: inputValue
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
                            return <li key={product.id} product={product} className="list-group-item item">{product.item}<span><span className="edit" onClick={this.edit.bind(this, product)}>Edit</span><span className="delete" onClick={this.delete.bind(this, product)}>Delete</span></span>

                            </li>
                        })
                    }

                </ul>
            </div>
        )
    }

    edit(product){
        console.log("edit");
        this.props.editItem(product);
    }
    delete(product){
        console.log("delete");
        console.log(product);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
