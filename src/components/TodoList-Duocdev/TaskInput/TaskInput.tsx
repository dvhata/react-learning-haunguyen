import { Todo } from "../@types/todo.type";
import styles from "./taskInput.module.scss";
import React from "react";

interface TaskInputProps {
  addTodo: (name: string) => void;
  currentTodo?: Todo;
  editTodo: (name: string) => void;
  finishTodo: () => void;
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishTodo } = props;
  const [name, setName] = React.useState<string>("");

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTodo) {
      finishTodo();
    } else {
      addTodo(name);
    }
    setName("");
  };

  return (
    <div>
      <h1 className={styles.title}> Todo List</h1>
      <form className={styles.form} onSubmit={handleSumbit}>
        <input
          type="text"
          value={currentTodo ? currentTodo.name : name}
          id=""
          placeholder="enter input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (currentTodo) {
              editTodo(e.target.value);
            } else {
              setName(e.target.value);
            }
          }}
        />
        <button type="submit">{currentTodo ? "✅" : "➕"}</button>
      </form>
    </div>
  );
}
