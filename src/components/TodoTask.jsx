import React from "react";
import Button from "./Button";

const TodoTask = ({ task, number, handleDeleteTask }) => {
  return (
    <div className="flex justify-between items-center p-5 ">
      <h1>
        {number + 1}. {task}
      </h1>
      <div className="flex gap-2">
        <button  className="bg-blue-600 p-2 rounded-lg text-white">Edit</button>
        <button onClick={handleDeleteTask} className="bg-red-500 p-2 rounded-lg text-white">Delete</button>
      </div>
    </div>
  );
};

export default TodoTask;
