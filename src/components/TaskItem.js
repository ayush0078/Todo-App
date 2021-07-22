import React from "react";
import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <li>
      {props.task}
      <input type="checkbox" />
    </li>
  );
};

export default TaskItem;
