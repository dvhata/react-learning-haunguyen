import React from "react";
import Temperature from "./Temperature";
import Predict from "./Predict";

export default function RenderUIParent() {
  const [celsius, setCelsius] = React.useState<number>();
  const [fahrenheit, setFahrenheit] = React.useState<number>();
  return (
    <>
      <Temperature
        celsius={celsius}
        setCelsius={setCelsius}
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
      />
      <Predict celsius={celsius} />
    </>
  );
}
