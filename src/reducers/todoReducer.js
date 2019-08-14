export const initialState = {
  tasks: [
    {
      name: "testing",
      completed: false,
      id: Date.now()
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return !task.completed;
        })
      };
    default:
      return state;
  }
};
