import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Lists.css";
import React from "react";

function Todo({ task, toggleComplete, deleteTodo, Editing }) {
  return (
    <div className="list">
      <div
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "line-through" : " "}`}
      >
        <li> {task.task} </li>
      </div>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => Editing(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default Todo;
