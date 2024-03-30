import React from "react";
import "./ColorBox.scss";

const initColorBox: string = localStorage.getItem("colorBox") || "red";
// console.log("init color box: " + initColorBox)

export default function ColorBox() {
  const [color, setColor] = React.useState(initColorBox);
  const colorArray = ["pink", "green", " blue", "purple", "yellow", "red"];

  const handleOnClickColorBox = () => {
    const i = Math.floor(Math.random() * colorArray.length);
    const colorOutput = colorArray[i];
    localStorage.setItem("colorBox", colorOutput);
    setColor(colorOutput);
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
