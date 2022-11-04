import React from "react";
import "./App.scss";
import AdvancedReactPattern from "./components/AdvancedReactPattern/AdvancedReactPattern";
import ColorBox from "./components/ColorBox/ColorBox";
import ShowHook from "./components/CustomHook/ShowHook";

function App() {
  return (
    <div className="App">
      <h1> USE STATE - Box color changing when click</h1>
      <ColorBox />
      <h1> How to custom hook</h1>
      <ShowHook />
      <h1> Advanced React Patterns, Performance, Environment and Testing </h1>
      <AdvancedReactPattern />
    </div>
  );
}

export default App;
