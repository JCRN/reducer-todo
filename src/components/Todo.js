import React from "react";

function Todo({ toggle, task }) {
  return (
    <div>
      <p
        className={`task${task.completed ? "completed" : ""}`}
        onClick={() => toggle(task.id)}
      >
        {task.name}
      </p>
    </div>
  );
}

export default Todo;
