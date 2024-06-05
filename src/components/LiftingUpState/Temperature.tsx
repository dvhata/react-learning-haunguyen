import React from "react";

export default function Temperature(props: any) {
  const { celsius, fahrenheit, setCelsius, setFahrenheit } = props;

  return (
    <>
      {/* <div>
        <label htmlFor="degree_c">Độ C</label>
        <input
          value={celsius}
          name="Độ C"
          type="text"
          autoComplete="off"
          onChange={(e) => {
            console.log(e.target.value);
            setCelsius(e.target.value);
          }}
        />
      <div/>

      <div>
        <label htmlFor="degree_c">Độ F</label>
        <input
          value={fahrenheit}
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setFahrenheit(e.target.value);
          }}
        />
      <div/> */}
    </>
  );
}
