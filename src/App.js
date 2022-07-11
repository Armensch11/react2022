import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
  const [textInput, setTextInput] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  return (
    <div className="App">
      <h1>To Do list</h1>
      <div id="main">
        <Input
          textInput={textInput}
          setTextInput={setTextInput}
          todoArr={todoArr}
          setTodoArr={setTodoArr}
        />
        <Todos taskArr={todoArr} setTaskArr={setTodoArr} />
      </div>
    </div>
  );
}

export default App;
