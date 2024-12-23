import React, { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return; // Validation
    addTask(title, description, category);
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <input
        className="h-[40px] p-4 rounded outline-none"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
      className="h-[60px] p-4 rounded outline-none resize-none"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select className="h-[40px] pl-4 rounded outline-none cursor-pointer" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button className="bg-blue-300 rounded py-3 text-lg font-bold text-white" type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
