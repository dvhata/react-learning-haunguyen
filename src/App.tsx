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
import AnimalCard from "./components/AnimalCard/AnimalCard";
import Clock from "./components/ClassComponent/Clock";
import BareButton from "./components/DuocDev/BareButton";
import LoginControl from "./components/DuocDev/LoginControl";
import ThirtyDaysOfJavacript from "./components/Leetcode/30daysOfJavacript";
import UncontrolledComponent from "./components/DuocDev/UncontrolledComponent";

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

function App() {
  const [visible, setVisible] = React.useState<boolean>();
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
      })} 
      <h1>9. State và lifecycle trong class component</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Hide Clock component
      </button>
      {visible && <Clock name="casio" />}
      <h1>10. Xử lý state</h1>
      <BareButton />
      */}
      {/* <h1>11. Render có điều kiện</h1>
      <LoginControl isLoggedIn={true} /> */}
      <h1>12. UncontrolledComponent</h1>
      <UncontrolledComponent />
    </div>
  );
}

export default App;
