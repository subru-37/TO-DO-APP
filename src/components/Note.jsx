import React, { useState } from "react";

function Note(props) {
  const [boolElement, setBool] = useState(false);
  function deleteItem() {
    props.delete(props.id);
  }
  function mouse() {
    setBool(!boolElement);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={deleteItem}
        onMouseOver={mouse}
        onMouseOut={mouse}
        style={{ backgroundColor: boolElement && "green" }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
