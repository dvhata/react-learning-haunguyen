import styles from "./todoList.module.scss";
import React from "react";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import { Todo } from "../@types/todo.type";

export default function TodoListDuocdev() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = React.useState<Todo>();

  const addTodo = (name: string) => {
    const todo: Todo = {
      id: (todos?.length + 1).toString(),
      name,
      done: false,
    };
    setTodos((prev) => [...prev, todo]);
  };

  const handleDoneToto = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev?.map((i) => {
        return i?.id === id ? { ...i, done } : i;
      });
    });
  };

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((i) => i?.id === id);
    if (findedTodo) {
      setCurrentTodo(findedTodo);
    }
  };

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name };
      return undefined;
    });
  };

  const finishTodo = () => {
    setTodos((prev) => {
      return prev?.map((i) => {
        // ép kiểu currentTodo để đảm bảo luôn có giá trị
        return i?.id === currentTodo?.id ? currentTodo : i;
      });
    });
    setCurrentTodo(undefined);
  };

  const deleteTodo = (id: string) => {
    if (currentTodo) setCurrentTodo(undefined);
    setTodos((prev) => {
      return prev?.filter((i) => {
        // ép kiểu currentTodo để đảm bảo luôn có giá trị
        return i?.id !== id;
      });
    });
  };

  // React.useEffect(() => {
  //   const todoListInit = localStorage.getItem("todos");
  //   setTodos(todoListInit ? JSON.parse(todoListInit || "") : []);
  // }, []);

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          finishTodo={finishTodo}
        />
        <TaskList
          todos={todos?.filter((i) => !i?.done)}
          doneTaskList={false}
          handleDoneToto={handleDoneToto}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          todos={todos?.filter((i) => i?.done)}
          doneTaskList
          handleDoneToto={handleDoneToto}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
