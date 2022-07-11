import React, { useEffect } from "react";

const Input = ({ textInput, setTextInput, todoArr, setTodoArr }) => {
  const onChangeHandler = (e) => {
    setTextInput(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(textInput);
    const newTodo=[ ...todoArr,
      {
        task: textInput,
        id: Math.floor(Math.random() * 10000),
        done: false,
      },
    ];
    setTodoArr(newTodo);
    console.log(todoArr);
    setTextInput("");
  };
useEffect(()=>console.log(todoArr),[todoArr]);
  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        value={textInput}
        placeholder="enter you todo here"
      ></input>
      <button onClick={onSubmitHandler}>Add Task</button>
    </div>
  );
};

export default Input;
