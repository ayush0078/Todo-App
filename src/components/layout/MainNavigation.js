import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ToDo Lists</div>
    </header>
  );
};

export default MainNavigation;
