import React, { useState, useEffect, useRef } from 'react';
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { UilTrash } from '@iconscout/react-unicons'
import "./Notes.css"
import { UilCheck } from '@iconscout/react-unicons'
import { UilCircle } from '@iconscout/react-unicons'
import { UilPlusSquare } from '@iconscout/react-unicons'
function Notes() {
    //const [todos, setTodos] = useState([]);
    //const [todos, setTodos] = useState([{complete:false, todo:"hi", id:"1"}]);
    const [todos, setTodos] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [error, setError] = useState(false);
    const [completedTasks, setCompletedTasks] = useState('');
    const firstUpdate = useRef(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoItem) {
            setError(false);
            let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newTodoItem = {
                id: uniqueId,
                todo: todoItem,
                complete: false,
            };
            setTodos([newTodoItem, ...todos]);
            setTodoItem('');
        } else {
            setError(true);
            setTodoItem('');
        }
    };

    const deleteTodo = (id) => {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...newTodos]);
    };

    const toggleComplete = (id) => {
        todos.find((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return setTodos([...todos]);
        });
    };

    useEffect(() => {
        let completeArray = [];
        todos.filter((todo) => todo.complete === true && completeArray.push(todo));
        setCompletedTasks(completeArray.length);
    }, [todos]);

    useEffect(() => {
        let localTodos = JSON.parse(localStorage.getItem('todo'));
        //localTodos.map((x) => {console.log(x);});

        if (localTodos) {
            setTodos((oldarray) => oldarray.concat(localTodos));
            //setTodos((oldarray)=> [...oldarray,localTodos]);
            // setTodos(localTodos);
        }

        todos.map((x) => { console.log(x); });
    }, []);

    useEffect(() => {
        let adderror = setTimeout(() => {
            setError(false);
        }, 2000);
        return () => {
            clearTimeout(adderror);
        };
    }, [error]);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos));
    }, [todos]
    );


    return (
        <div className="note-container" >
            <div className="header-section">

                <form onSubmit={handleSubmit} className="app-form-container">
                    <input
                        type="text"
                        value={todoItem}
                        className="note-input"
                        onChange={(e) => setTodoItem(e.target.value)}
                        placeholder="Type Todo here..."
                    />
                    <button type="submit" className="note-button">
                        Add Todo
                    </button>
                </form>
            </div>
            <div className="todo-container">
                {todos.map((todoItem) => {
                    const { id, todo, complete } = todoItem;
                    return (
                        <div key={id} className="todo-item">
                            <div className={complete ? 'text-done' : ''}>{todo}</div>
                            <UilTrash onClick={() => deleteTodo(id)} />
                            <div className="icon" onClick={() => toggleComplete(id)}>
                                {!complete ? (
                                    <UilCheck className="todo-button green"/>
                                ) : (
                                    <UilCircle className="todo-button red"/>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Notes;
