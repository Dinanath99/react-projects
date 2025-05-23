import React from "react";
import { useState } from "react";
const App = () => {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const HandleTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTask([...task, newTask]);
    setTaskInput("");
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = task.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };

  const handleDelete = (id) => {
    const filteredTask = task.filter((task) => task.id !== id);
    setTask(filteredTask);
  };
  console.log(task);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeHolder="Enter your Task"
          className="px-3 py-2 border rounded mt-3"
        />
        <button
          onClick={HandleTask}
          className="bg-blue-400 py-2 rounded m-2 text-white px-2 cursor-pointer"
        >
          Add task
        </button>
        <ul>
          {task.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white p-2 rounded shadow mt-2"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                />
                <span
                  className={task.completed ? "line-through text-gray-400" : ""}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
