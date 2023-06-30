import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] =useState([]);
    const handleAdd = (todo) => {
        setTodos((prev)=>[...prev, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos((prev)=>prev.map((item)=>item.id === updated.id ? updated : item));
    }
    const handleDelete = (deleted) => {
        setTodos((prev)=>prev.filter((todo)=>todo.id !== deleted.id));
    }

    useEffect(()=>{
        const data = localStorage.getItem("todos");
        if(data) {
            setTodos(JSON.parse(data));
        }
    },[]);

    useEffect(()=>{
        const handleBeforeUnload = () => {
            localStorage.setItem("todos",JSON.stringify(todos));
        };

        window.addEventListener("beforeunload",handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload",handleBeforeUnload);
        }
    },[todos])

    const filtered = getFilteredItems(todos,filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
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

