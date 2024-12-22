import React from "react";
import { TodoTaskProps } from "./TodoList";


export default function TodoTask(props: TodoTaskProps) {
  const {  id, name, handleDeleteTask, handleEditTask } = props;
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [newTaskName, setNewTaskName] = React.useState<string>(name);

  const handleEdit = () => {
    if (isEdit) {
      handleEditTask?.(id, newTaskName)
    }
    setIsEdit(!isEdit);
  }

  return <li key={name}>
  {isEdit ? (
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      ) : (
        name
      )}
    <button onClick={() => handleDeleteTask?.(name)}>Delete</button>
    <button onClick={handleEdit}>{isEdit ? 'Save' : 'Edit'}</button>
  </li>;
}
