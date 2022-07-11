import React from "react";
import Todo from "./Todo";

const Todos = ({ taskArr, setTaskArr }) => {
  return (
    <div className="todos">
      {" "}
      {taskArr.map((el) => (
        <Todo
          key={el.id}
          task={el.task}
          completed={el.done}
          todo={el}
          taskArr={taskArr}
          setTaskArr={setTaskArr}
        />
      ))}
    </div>
  );
};

export default Todos;
