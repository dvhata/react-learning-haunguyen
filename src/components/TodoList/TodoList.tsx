import React from "react";

export default function TodoList() {
  const [newTask, setNewTask] = React.useState<string>();

  const handleAddTask = React.useCallback((e) => {
    console.log(e.target.value);
  }, []);

  return (
    <>
      <div>
        <button onChange={handleAddTask}> Add task</button>
        <input value={newTask} />
      </div>
    </>
  );
}
