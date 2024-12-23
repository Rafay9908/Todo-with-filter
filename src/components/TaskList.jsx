import React from "react";

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li className="flex space-x-10 text-lg text-blue-300 pb-4" key={task.id}>
            <input 
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            />
            <strong>{task.title}</strong> ({task.category})
            <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
