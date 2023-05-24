import React from "react";
import { ACTIONS } from "./App.jsx";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="todo">
      <div style={{ color: todo.completed ? "#CA3445" : "#fff" }}>
        {todo.name}
      </div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
