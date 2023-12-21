import Button from "../../components/Button";

import { useState } from "react";
import TodoTask from "../../components/TodoTask";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (userInput === "") {
      alert("Please add a task");
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = userInput;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList((prevTodo) => [...prevTodo, userInput]);
    }
    setUserInput("");
  };

  const handleDeleteTask = (index) => {
    const confirm = window.confirm(
      `Are you sure you want to delete task ${index + 1}?`
    );

    if (confirm) {
      const filtered = todoList.filter((task, i) => {
        return index !== i;
      });
      setTodoList(filtered);
      setEditIndex(null);
      setUserInput("");
    }
  };

  const handleClearAllTask = () => {
    const confirm = window.confirm(
      "Are you sure you want to clear all the task?"
    );
    if (confirm) {
      setTodoList([]);
      setUserInput("");
      setEditIndex(null);
    }
  };

  const handleEditTask = (index) => {
    setUserInput(todoList[index]);
    setEditIndex(index);
  };

  return (
    <section className="h-screen bg-gradient-to-b from-cyan-500 to-blue-500">
      <div className="container mx-auto py-12">
        <div className=" flex flex-col items-center justify-center px-6 pt-12 lg:py-0 ">
          <h1 className="text-black flex items-center mb-6 text-3xl font-bold tracking-wide">
            Simple Todo App
          </h1>
          <div className="w-full p-5 bg-gray-50 rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-lg xl:p-0">
            <div className=" py-5 flex items-center justify-center flex-col space-y-4 md:">
              <input
                type="text"
                className=" w-3/4 h-12 pl-5 rounded-md font-md border-4 mt-5"
                placeholder="Enter a task"
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
              />
              <div className="flex gap-2 md:gap-5">
                <Button
                  color={editIndex === null ? "bg-blue-600" : "bg-amber-600"}
                  onClick={handleAddTask}
                >
                  {editIndex === null ? "Add task" : "Edit task"}
                </Button>
                {todoList.length > 0 && (
                  <Button color={"bg-red-600"} onClick={handleClearAllTask}>
                    Clear All
                  </Button>
                )}
              </div>
              <div
                className={`${
                  todoList.length > 0 ? "border-2 shadow-md w-3/4 py-2 " : ""
                }`}
              >
                {todoList.map((task, index) => (
                  <TodoTask
                    key={index}
                    number={index}
                    task={task}
                    editIndex={editIndex}
                    handleDeleteTask={() => handleDeleteTask(index)}
                    handleEditTask={() => handleEditTask(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
