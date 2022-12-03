import React, { useState } from "react";

function CreateArea(props) {
  const [value, setValue] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function mouse() {
    props.hover();
  }
  function onClicked(event) {
    props.onAdd(value);
    setValue({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onClicked}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={value.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={value.content}
        />
        <button
          onMouseOver={mouse}
          onMouseOut={mouse}
          style={{ backgroundColor: props.bool && "green" }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
