import React from "react";
import { useState } from "react";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const [list, setNewList] = useState([]);

  return (
    <div>
      <TodoList title="Grocery Shopping" />
    </div>
  );
};

export default HomePage;
