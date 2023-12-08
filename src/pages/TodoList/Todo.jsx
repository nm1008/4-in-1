import Button from "../../components/Button";

import { useState } from "react";
import TodoTask from "../../components/TodoTask";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (userInput === "") {
      alert("Please add a task");
      return;
    }
    setTodoList((prevTodo) => [...prevTodo, userInput]);
    setUserInput("");
  };

  const handleDeleteTask = (index) => {
    const filtered = todoList.filter((task, i) => {
      return index !== i;
    });
    setTodoList(filtered);
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
              <Button onClick={handleAddTask}>Add a task</Button>
              <Button>Clear All</Button>
            </div>
            <div className="border-2 h-24">
              {todoList.map((task, index) => (
                <TodoTask
                  key={index}
                  number={index}
                  task={task}
                  handleDeleteTask={() => handleDeleteTask(index)}
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
