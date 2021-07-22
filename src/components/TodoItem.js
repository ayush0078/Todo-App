import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const taskInputData = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const taskEntered = taskInputData.current.value;

    const taskData = {
      task: taskEntered,
    };

    props.addTask(taskData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <input type="text" required id="task" size="30" ref={taskInputData} />
        <button className={classes.btn}>+</button>
      </div>
    </form>
  );
};

export default TodoItem;
