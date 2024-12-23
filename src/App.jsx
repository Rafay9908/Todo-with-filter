import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("incomplete"); // 'all', 'completed', 'incomplete', 'categoryName'

  // Add a new task
  const addTask = (title, description, category) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilter("incomplete");
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return task.category === filter; // category filter
  });

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="mt-8 mb-8 text-2xl font-bold text-white">To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
