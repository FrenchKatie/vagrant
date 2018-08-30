import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" ref="newItem" placeholder="Add something to your list.." className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-1 btn-lg btn-block">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
    onSubmit(e){
        e.preventDefault();
        var newItem = this.refs.newItem.value.trim();
        if (!newItem) {
            alert("Please enter a new item");
            return;
        }
        this.props.addNew(newItem);
        this.refs.newItem.value = "";
    }
}
//only have to write this line if we are exporting a component from a different page
export default Form;
