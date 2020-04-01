import React, { Component } from 'react';
import Todos from "./Components/Todos";
import AddTodo from './Components/AddTodo';

class App extends Component {
  state = { 
    todos:[
      {id:1, content: "buy some milk"},
      {id:2, content: "play mario kart"},
    ]
   }

   deleteTodo = (id) =>{
     let afterDelete= this.state.todos.filter(todo=>todo.id !== id)
     this.setState({
       todos: afterDelete
     })
   }

   addTodo = (todo) =>{
     todo.id = this.state.todos.length + 1
     this.setState({ 
       todos: [...this.state.todos, todo]
     })
   }

  render() { 
    return ( 
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo  addTodo={this.addTodo}/>
      </div>
     );
  }
}
 


export default App;
