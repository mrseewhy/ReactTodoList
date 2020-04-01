import React, { Component } from 'react';

class AddTodo extends Component {
    state={
        id: null,
        content: ""
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({ content:""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Enter a todo'  type="text" name="content" id="content" onChange={this.handleChange} value={this.state.content}/>
                    <button className="btn waves-effect waves-light" type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
