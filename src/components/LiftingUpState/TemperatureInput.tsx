import React from "react";

export default function Temperature(props: any) {
  const { temperature, scale, setTemperature, setScale, onTemperatureChange } =
    props;

  return (
    <>
      <span>Độ {scale}</span>
      <input
        value={temperature}
        name={`Độ ${scale}`}
        type="text"
        onChange={(e) => {
          onTemperatureChange(e.target.value);
        }}
      />
    </>
  );
}
