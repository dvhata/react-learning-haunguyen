import React from "react";
import "./TodoList.scss";
import TodoTask from "./TodoTask";
import { TodoListProps } from "../../App";

export interface TodoTaskProps {
  id: string;
  name: string;
  handleDeleteTask?: (taskName: string) => void;
  handleEditTask?: (id: string, taskName: string) => void;
}

export default function TodoList(props: TodoListProps) {
  const {taskList, handleDeleteTask, handleEditTask} = props;

  return (
    <div className="to-do-list">
      <div className="add-task">
        {taskList?.length > 0 && taskList?.map((item) => {return <TodoTask key={item.id}  id={item.id} name={item.name} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>} ) }
      </div>
    </div>
  );
}
