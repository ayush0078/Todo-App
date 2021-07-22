import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} task={task.task} />
      ))}
    </ul>
  );
};

export default TaskList;
