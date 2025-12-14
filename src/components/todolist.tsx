import { useEffect, useState } from 'react';
import AddForm from './addform.tsx';
interface Todo {
    id: number;
    text: string;
    status: boolean;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('/data/data.json')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addTodo = (text: string) => {
        const nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
        const newTodo = {
            id: nextId,
            text,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <section>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text} - {todo.status ? 'Done' : 'Not Done'}
                    </li>
                ))}
            </ul>
            <AddForm onAdd={addTodo} />
        </section>
    );
}
export default TodoList;
