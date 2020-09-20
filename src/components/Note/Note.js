import React from "react";

function Note(props) {
    return (
        <div className="box">
            {props.note.title}
        </div>
    );
}

export default Note;
