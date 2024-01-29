import React, { useState } from "react";
import FormApp from "./FormApp";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditingForm from "./EditingForm";
function FormContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, editing: false },
    ]);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function Editing(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              editing: !todo.editing,
            }
          : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              editing: !todo.editing,
            }
          : todo
      )
    );
  }

  return (
    <div>
      <FormApp onSubmit={addTodo} />
      {todos.map((todo, idx) =>
        todo.editing ? (
          <EditingForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={idx}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            Editing={Editing}
          />
        )
      )}
    </div>
  );
}

export default FormContainer;

// if (!todo.text || /^\s*$/.test(todo.text)) {
//   return;
// }
