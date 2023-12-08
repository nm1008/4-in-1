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
      setEditIndex(null)
      setUserInput("")
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
    <section className="container mx-auto ">
      <div className=" flex flex-col items-center justify-center mt-12 px-6 py-8 lg:py-0 ">
        <a
          href="#"
          className="text-black flex items-center mb-6 text-2xl font-semibold "
        >
          Simple Todo App
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
          <div className=" space-y-4 md:space-y-6 sm:p-8">
            <input
              type="text"
              className=" w-full h-12 pl-5 rounded-md font-md border-4"
              placeholder="Enter a task"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            />
            <div className="flex gap-10 justify-center">
              <Button color={editIndex === null ? "bg-blue-600" : "bg-amber-600"}onClick={handleAddTask}>
                {editIndex === null ? "Add task" : "Edit task"}
              </Button>
              {todoList.length > 0 && (
                <Button color={"bg-red-600"} onClick={handleClearAllTask}>Clear All</Button>
              )}
            </div>
            <div className={`${todoList.length > 0 ? "border-2 h-auto" : ""}`}>
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
    </section>
  );
};

export default Todo;
