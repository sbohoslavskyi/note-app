import React from "react";

import notes from "../../store";
import Note from "../Note";

function NoteList() {
    return (
        <div className="container">
            <div className="columns">
                {notes.map((note) =>
                    <div key={note.id} className="column is-4">
                        <Note note={note} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NoteList;
