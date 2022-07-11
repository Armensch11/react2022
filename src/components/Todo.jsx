import React from "react";
import "./styles/Todo.css";

const Todo = ({ task, taskArr, setTaskArr, todo }) => {
  const onRemoveHandler = () => {
    const filteredArr = taskArr.filter((el) => el.id !== todo.id);
    setTaskArr(filteredArr);

    console.log(filteredArr);
  };
  return (
    <div key={todo.id} className="todo-item">
      <p>{task}</p>
      <button>mark done</button>
      <button onClick={onRemoveHandler}>remove</button>
    </div>
  );
};

export default Todo;
