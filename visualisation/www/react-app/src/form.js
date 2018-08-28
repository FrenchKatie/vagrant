import React, { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" ref="text" placeholder="Add something to your list.." className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-1 btn-lg btn-block">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
//only have to write this line if we are exporting a component from a different page
export default Form;
