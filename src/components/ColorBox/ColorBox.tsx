import React from "react";
import "./ColorBox.scss";

const initColorBox: string = localStorage.getItem("colorBox") || "red";
// console.log("init color box: " + initColorBox)

export default function ColorBox() {
  const [color, setColor] = React.useState(initColorBox);
  const colorArray = ["pink", "green", " blue", "purple", "yellow", "red"];

  const handleOnClickColorBox = () => {
    let i = Math.floor(Math.random() * colorArray.length);
    // console.log(i + color);
    localStorage.setItem("colorBox", color);
    setColor(colorArray[i]);
  };
  return (
    <div>
      <h3> ----- Click for changing color box ------ </h3>
      <div
        onClick={handleOnClickColorBox}
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
