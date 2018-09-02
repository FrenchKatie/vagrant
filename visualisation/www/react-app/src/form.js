import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" ref="newItem" placeholder="Add something to your list.." value={this.props.editingValue} onChange={this.onChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-1 btn-lg btn-block">{this.props.buttonText}</button>
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
        //if edit id is 0 - means that we are adding a new item
        //if edit id is anything else - means that we are editing and existing item
        if(this.props.editID === 0){
            this.props.addNew(newItem);
        } else{
            var updatingItem = {
                id: this.props.editID,
                item: newItem
            }
            this.props.updateItem(updatingItem);
        }

        this.refs.newItem.value = "";
    }

    onChange(e){
        this.props.changeText(e.target.value);
    }

}
//only have to write this line if we are exporting a component from a different page
export default Form;
