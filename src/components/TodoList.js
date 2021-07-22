import React from "react";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TodoItem from "./TodoItem";
import Card from "../ui/Card";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const [loadedTasks, setLoadedTasks] = useState([]);

  // Post Request for sending tasks to database
  const addTaskHandler = (taskData) => {
    fetch("https://todo-5eeb2-default-rtdb.firebaseio.com/todolist.json", {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //fetching tasks from database
  //   useEffect(() => {
  fetch("https://todo-5eeb2-default-rtdb.firebaseio.com/todolist.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tasks = [];

      for (const key in data) {
        const task = {
          id: key,
          ...data[key],
        };

        tasks.push(task);
      }

      setLoadedTasks(tasks);
    });
  //   }, [setLoadedTasks]);

  return (
    <section>
      <Card>
        <h3>{props.title}</h3>
        <TodoItem addTask={addTaskHandler} />
        <TaskList tasks={loadedTasks} />
      </Card>
    </section>
  );
};

export default TodoList;
