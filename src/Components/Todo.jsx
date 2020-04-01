import React from 'react';

const Todo = ({todo, deleteTodo}) => {
    return (
        <div className="collection-item">
            <span>{todo.content}</span> <button className="btn-floating red right" onClick={()=>deleteTodo(todo.id)}>X</button>
        </div>
    );
}

export default Todo;
