import React, { useState } from "react";
function EditingForm({ editTodo, task }) {
  const [input, setInput] = useState(task.task);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput(" ");
  };

  return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="add a new list"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default EditingForm;
