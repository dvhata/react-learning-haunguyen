import React from "react";

export interface AnimalDetailProps {
  diet: string[];
}
export default function AnimalDetail(props: AnimalDetailProps) {
  const { diet } = props;
  function convertFood(food: any) {
    switch (food) {
      case "insects":
        return "🐜";
      case "meat":
        return "🍖";
      case "plants":
      default:
        return "🌱";
    }
  }

  return (
    <div className="details">
      <h4>Details:</h4>
      <div>Diet: {diet.map((food) => convertFood(food)).join(" ")}</div>
    </div>
  );
}
