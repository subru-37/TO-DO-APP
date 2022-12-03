import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [element, setElement] = useState([]);
  const [boolElement1, setBool1] = useState(false);
  function onSubmitted(note) {
    setElement((preValue) => {
      return [...preValue, note];
    });
  }
  function onHover1() {
    setBool1((preValue) => {
      return !preValue;
    });
  }
  function onDelete(id) {
    setElement((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onSubmitted} hover={onHover1} bool={boolElement1} />
      {element.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={x.title}
            content={x.content}
            delete={onDelete}
            object={element}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
