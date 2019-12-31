import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";

import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTask = task => {
    if (task) return dispatch({ type: "ADD_TASK", payload: task });
  };

  const toggle = id => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <TodoList
        addTask={addTask}
        state={state}
        dispatch={dispatch}
        toggle={toggle}
        clear={clear}
      />
    </div>
  );
}

export default App;
