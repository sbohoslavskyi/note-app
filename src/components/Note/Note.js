import React from "react";

import Todo from "../Todo";

function Note(props) {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{props.note.title}</p>
            </header>
            <ul className="card-content">
                {props.note.todos.map((todo) =>
                    <li key={todo.id}>
                        <Todo todo={todo} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Note;
