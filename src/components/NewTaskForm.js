import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input
        id="task-details"
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.filter((c) => c !== "All").map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

