import "./App.scss";
import ThirtyDaysOfJavacript from "./components/Leetcode/30daysOfJavacript";
import TodoListDuocdev from "./components/TodoList-Duocdev/TodoListDuocdev/TodoListDuocdev";
import { TodoTaskProps } from "./components/TodoList/TodoList";

// const animals = [
//   {
//     name: "Lion",
//     scientificName: "Panthero leo",
//     size: 140,
//     diet: ["meat"],
//   },
//   {
//     name: "Gorilla",
//     scientificName: "Gorilla beringei",
//     size: 205,
//     diet: ["plants", "insects"],
//   },
//   {
//     name: "Zebra",
//     scientificName: "Equus quagga",
//     size: 322,
//     diet: ["plants"],
//   },
// ];

export interface TodoListProps {
  taskList: TodoTaskProps[];
  handleDeleteTask?: (taskName: string) => void;
  handleEditTask?: (id: string, taskName: string) => void;
}

const TODO_LIST_KEY = "taskList";
function App() {
  // const [visiblse, setVisible] = React.useState<boolean>();
  // const [taskList, setTaskList] = React.useState<TodoTaskProps[]>(
  //   localStorage.getItem("taskList")
  //     ? JSON.parse(localStorage.getItem(TODO_LIST_KEY) || "")
  //     : []
  // );
  // const [textInput, setTextInput] = React.useState<string>("");
  // const inputRef = React.useRef<HTMLInputElement>(null);

  // const handleAddTask = React.useCallback(() => {
  //   if (textInput) {
  //     setTaskList([
  //       ...taskList,
  //       { id: (taskList?.length + 1).toString(), name: textInput },
  //     ]);
  //     setTextInput("");
  //   }
  //   inputRef.current?.focus();
  // }, [textInput]);

  // const handleDeleteTask = React.useCallback(
  //   (taskName: string) => {
  //     setTaskList(taskList.filter((item) => item.name !== taskName));
  //   },
  //   [taskList]
  // );

  // const handleEditTask = React.useCallback(
  //   (id: string, newTaskName: string) => {
  //     setTaskList(
  //       taskList?.map((item) =>
  //         item?.id === id ? { ...item, name: newTaskName } : item
  //       )
  //     );
  //   },
  //   []
  // );

  // React.useEffect(() => {
  //   localStorage.setItem(TODO_LIST_KEY, JSON.stringify(taskList));
  // }, [taskList]);

  return (
    <div className="wrapper">
      <ThirtyDaysOfJavacript />
      {/* <h1> 1. USE STATE - Box color changing when click</h1>
      <ColorBox />
      <h1> 2. How to custom hook</h1>
      <ShowHook />
      <h1>
        {" "}
        3. Advanced React Patterns, Performance, Environment and Testing{" "}
      </h1>
      <AdvancedReactPattern />
      <h1> 4. React drag and drop list </h1>
      <DragAndDropList listData={listData} />
      <h1> 5. Todo List </h1>
      <TodoList />
      <h1> 6. Here map </h1>
      <HereMap />
      <h1> 7. Tic Tac Toe </h1>
      <TicTacToeBoard />
      <h1> 8. Animal Card </h1>
      {animals?.map((animal) => {
        return (
          <AnimalCard
            diet={animal?.diet}
            name={animal?.name}
            size={animal?.size}
          />
        );
      })} */}
      {/* <h1>9. State và lifecycle trong class component</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Hide Clock component
      </button>
      {visible && <Clock name="casio" />} */}
      {/* <h1>10. Props and PropTypes</h1>
      <BareInput
        type="text"
        value="100"
        autoFocus
        className="aa"
        onChange={() => {}}
      /> */}
      {/* <h1>Lifting up state</h1>
      <RenderUIParent /> */}
      {/* <h1 className="">Thinking in React</h1>
      <ProductList />
      <FilterableProductTable /> */}
      {/* <h1> 5. Todo List </h1>
      <div className="to-do-list">
        <div className="add-task">
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            ref={inputRef}
            className="add-task__input"
          />
          <button onClick={handleAddTask} className="add-task__button">
            Add task
          </button>
          <TodoList
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        </div>
      </div> */}
      <h1> TodoList - Duocdev</h1>
      <TodoListDuocdev />
    </div>
  );
}

export default App;
