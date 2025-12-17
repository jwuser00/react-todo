import { useState } from "react";
import styles from './addform.module.css';

interface AddFormProps {
    onAdd: (text: string) => void;
}

export default function AddForm({ onAdd }: AddFormProps) {
    const [text, setText] = useState('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '')
            return;
        onAdd(text);
        setText('');
    };

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button className={styles.button} type="submit">Add</button>
        </form>
        </div>
    );
}
