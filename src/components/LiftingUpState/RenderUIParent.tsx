import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import Temperature from "./TemperatureInput";

export default function RenderUIParent() {
  const [temperature, setTemperature] = React.useState<number>();
  const [scale, setScale] = React.useState<string>("");

  // Kỹ thuật áp dụng currying
  const handleChange = (scale: string) => (value: number) => {
    setScale(scale);
    setTemperature(value);
  };

  const tryConvert = React.useCallback((temperature, scale) => {
    if (!temperature) return "";
    if (scale === "F")
      return Math.round(((Number(temperature) - 32) / 1.8) * 1000) / 1000;
    if (scale === "C")
      return Math.round((Number(temperature) * 1.8 + 32) * 1000) / 1000;
  }, []);

  const celcius = scale === "F" ? tryConvert(temperature, scale) : temperature;
  const falharen = scale === "C" ? tryConvert(temperature, scale) : temperature;

  return (
    <>
      <Temperature
        scale="C"
        temperature={celcius}
        onTemperatureChange={handleChange("C")}
      />
      <Temperature
        scale="F"
        temperature={falharen}
        onTemperatureChange={handleChange("F")}
      />
      <BoilingVerdict temperature={celcius} />
    </>
  );
}
