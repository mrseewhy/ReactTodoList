import React from 'react';
import Todo from './Todo'

const Todos = ({todos, deleteTodo}) => {
if( todos.length === 0){
    return <p className="center">You have no todo's left, You are hardworking</p>
} else{
    return (
        <div className="todos collection">
            {todos.map(todo=><Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
        </div>
    );}
}

export default Todos;
