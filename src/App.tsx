import React from "react";
import "./App.scss";
import { listData } from "./assets/listData";
import AdvancedReactPattern from "./components/AdvancedReactPattern/AdvancedReactPattern";
import ColorBox from "./components/ColorBox/ColorBox";
import ShowHook from "./components/CustomHook/ShowHook";
import Card from "./components/DragAndDrop/Card/Card";
import DragAndDropList from "./components/DragAndDrop/List/DragAndDropList";

const LessonCard = (item: any) => <Card item={item} />;

function App() {
  return (
    <div className="App">
      <h1> I. USE STATE - Box color changing when click</h1>
      <ColorBox />
      <h1> II. How to custom hook</h1>
      <ShowHook />
      <h1>
        {" "}
        III. Advanced React Patterns, Performance, Environment and Testing{" "}
      </h1>
      <AdvancedReactPattern />
      <h1> IV. React drag and drop list </h1>
      <DragAndDropList
        listData={listData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </div>
  );
}

export default App;
