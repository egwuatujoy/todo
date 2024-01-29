import React, { useState } from "react";

import "./FormApp.css"
function FormApp(prop) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      prop.onSubmit (input)
      setInput (" ")
  };

  return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          placeholder="add a new list"
          value={input}
          name="text"
          onChange={handleChange}
        />
        <button type="submit" className="btn">submit</button>
      </form>
    </div>
  );
}

export default FormApp;
