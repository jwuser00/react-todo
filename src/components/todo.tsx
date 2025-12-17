import type { Todo as TodoType } from './todolist';
import styles from './todo.module.css';

interface TodoProps {
    todo: TodoType;
    onUpdate: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
    const { id, text, status } = todo;
    return (
        <li className={styles.todo}>
            <input type="checkbox" id={`checkbox-${id}`} checked={status} onChange={() => onUpdate(id)} />
            <label className={styles.label} htmlFor={`checkbox-${id}`}>{text}</label>
            <button className={styles.button} onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}

