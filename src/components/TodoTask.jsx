const todoButton = "px-5 py-2 rounded-lg text-white";

const TodoTask = ({
  task,
  number,
  handleDeleteTask,
  handleEditTask,
  editIndex,
}) => {
  return (
    <div className="flex justify-between items-center p-5 ">
      <h1>
        {number + 1}. {task}
      </h1>
      <div className="flex gap-2">
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
