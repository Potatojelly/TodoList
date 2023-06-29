import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({filter}) {
    const [todos, setTodos] =useState([
        {id:"123", text:"Reading books", status: "active"},
        {id:"124", text:"Studying", status: "active"}
    ]);
    const handleAdd = (todo) => {
        setTodos((prev)=>[...prev, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos((prev)=>prev.map((item)=>item.id === updated.id ? updated : item));
    }
    const handleDelete = (deleted) => {
        setTodos((prev)=>prev.filter((todo)=>todo.id !== deleted.id));
    }
    const filtered = getFilteredItems(todos,filter);
    return (
        <section>
            <ul>
                {filtered.map((item) => (
                    <Todo key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}>
                    </Todo>
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function getFilteredItems(todos,filter) {
    if(filter === "all") {
        return todos;
    }
    return todos.filter((todo)=>todo.status===filter);
}

