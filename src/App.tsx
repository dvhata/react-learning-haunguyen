import React from "react";
import "./App.scss";
import { listData } from "./assets/listData";
import AdvancedReactPattern from "./components/AdvancedReactPattern/AdvancedReactPattern";
import ColorBox from "./components/ColorBox/ColorBox";
import ShowHook from "./components/CustomHook/ShowHook";
import DragAndDropList from "./components/DragAndDrop/List/DragAndDropList";
import TicTacToeBoard from "./components/TicTacToe/TicTacToe";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import TodoList from "./components/TodoList/TodoList";
import BareButton from "./components/DuocDev/BareButton";

function App() {
  return (
    <div className="App">
      <h1> I. USE STATE - Box color changing when click</h1>
      <ColorBox />
      <h1> II. How to custom hook</h1>
      <ShowHook />
      <h1>
        III. Advanced React Patterns, Performance, Environment and Testing{" "}
      </h1>
      <AdvancedReactPattern />
      <h1> IV. React drag and drop list </h1>
      <DragAndDropList listData={listData} />
      <h1> V. Todo List </h1>
      <TodoList />
      <h1> VI. Tic Tac Toe </h1>
      <TicTacToeBoard />
      <h1> VII. DuocDev - event handler </h1>
      <BareButton />
    </div>
  );
}

export default App;
