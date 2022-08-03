import { useState } from "react";
import "../Tasks/styles.css";
import TaskForm from "../Tasks/TaskForm";
import TasksHeader from "../Tasks/TasksHeader";
import TasksList from "../Tasks/TasksList";

export default function App() {

  return (
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
}
