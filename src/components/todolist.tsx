import { useEffect, useState } from 'react';
import AddForm from './addform.tsx';
import Todo from './todo.tsx';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import { useDarkMode } from '../context/DarkModeContext';

export interface Todo {
    id: string;
    text: string;
    status: boolean;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState('all');
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        fetch('/data/data.json')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addTodo = (text: string) => {
        const nextId = uuidv4();
        const newTodo = {
            id: nextId,
            text,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, status: !todo.status } : todo));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = filterTodos(todos, filter);

    return (
        <section id="container">
            <div id="container-filter">
                <button onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} onUpdate={toggleTodo} onDelete={deleteTodo} />
                ))}
            </ul>
            <AddForm onAdd={addTodo} />
        </section>
    );
}

function filterTodos(todos: Todo[], filter: string) {
    if (filter === 'active') return todos.filter(todo => !todo.status);
    if (filter === 'completed') return todos.filter(todo => todo.status);
    return todos;
}
export default TodoList;
