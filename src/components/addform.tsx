import { useState } from "react";

export default function AddForm({ onAdd }: { onAdd: (text: string) => void }) {
    const [text, setText] = useState('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '')
            return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}
