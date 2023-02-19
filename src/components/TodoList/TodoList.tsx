import React from "react";
import "./TodoList.scss";

export default function TodoList() {
  const [taskInput, setTaskInput] = React.useState<string>();
  const [newTask, setNewTask] = React.useState<string>();

  const handleGetTask = React.useCallback((e) => {
    setTaskInput(taskInput);
  }, []);

  const handleAddTask = React.useCallback((e) => {
    setNewTask(taskInput);
  }, []);

  React.useEffect(() => {
    console.log(newTask);
  }, []);

  React;

  return (
    <div className="to-do-list">
      <div className="add-task">
        <input onChange={handleAddTask} className="add-task__input" />
        <button onChange={handleGetTask} className="add-task__button">
          Add task
        </button>
      </div>
    </div>
  );
}
