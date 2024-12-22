import { Todo } from "../@types/todo.type";
import styles from "./taskList.module.scss";

interface TaskListProps {
  doneTaskList: boolean;
  todos: Todo[];
  handleDoneToto: (id: string, done: boolean) => void;
  startEditTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneToto, startEditTodo, deleteTodo } =
    props;

  const onChangeCheckbox =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      handleDoneToto(id, event.target.checked);
    };

  return (
    <div>
      <h2 className={styles.title}>
        {doneTaskList ? "Hoàn thành" : "Chưa hoàn thành"}
      </h2>
      {todos?.map((todo) => {
        return (
          <div className={styles.task} key={todo.id}>
            <input
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)}
              type="checkbox"
              className={styles.taskCheckbox}
            />
            <span
              className={`${styles.taskName} ${
                doneTaskList ? styles.taskNameDone : ""
              }`}
            >
              {todo.name}
            </span>
            <div className={styles.taskActions}>
              <button
                className={styles.taskBtn}
                onClick={() => startEditTodo(todo.id)}
              >
                🖊
              </button>
              <button
                className={styles.taskBtn}
                onClick={() => deleteTodo(todo.id)}
              >
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
