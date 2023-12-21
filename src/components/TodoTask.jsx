const todoButton = "px-2 py-1 rounded-lg text-white md:p-3";

const TodoTask = ({
  task,
  number,
  handleDeleteTask,
  handleEditTask,
  editIndex,
}) => {
  return (
    <div className="flex flex-col gap-3 justify-between items-center py-3 md:flex-row ">
      <h1 className="font-bold md:ml-5">
        {number + 1}. {task}
      </h1>
      <div className="flex gap-2 md:mr-5">
        {editIndex === null && (
          <button
            onClick={handleEditTask}
            className={`bg-amber-600 ${todoButton}`}
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDeleteTask}
          className={`bg-red-600 ${todoButton}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
