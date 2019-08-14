import React from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ addTask, state, toggle, clear }) {
  return (
    <div>
      <TodoForm addTask={addTask} />
      <button onClick={() => clear()}>Clear completed tasks</button>
      <ul>
        {state.tasks.map(task => (
          <Todo key={task.id} toggle={toggle} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
