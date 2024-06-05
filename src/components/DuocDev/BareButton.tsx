import React from "react";

export default function BareButton() {
  // const handleClick = (value: string) => {
  //   console.log(value);
  // };

  // Áp dụng kỹ thuật currying: Funtion return ve 1 funtion (Function con sử dụng biến của function cha)
  const handleClick = (value: string) => () => {
    console.log(value);
  };

  // Version đầy đủ: Kỹ thuật closure
  // const handleClick = (value: string) => {
  //   return () => {
  //     console.log(value);
  //   }
  // }

  return (
    <div>
      <button className="btn-primary" onClick={handleClick("Add")}>
        Add
      </button>
      <br />
      <button className="btn-primary" onClick={handleClick("Edit")}>
        Edit
      </button>
      <br />
      <button className="btn-primary" onClick={handleClick("Delete")}>
        Delete
      </button>
    </div>
  );
}
