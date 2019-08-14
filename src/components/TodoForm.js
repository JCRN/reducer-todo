import React, { useState } from "react";

export default function TodoForm({ addTask }) {
  const [task, setTask] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    setTask("");
    addTask(task);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Add a Task:</label>
      <input
        type="text"
        name="taskName"
        placeholder="Name of task"
        id="taskName"
        onChange={event => setTask(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
