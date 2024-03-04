import React from "react";
import AnimalDetail from "./AnimalDetail";

export interface AnimalCardProps {
  diet: string[];
  name: string;
  size: number;
}
export default function AnimalCard(props: AnimalCardProps) {
  const { diet, name, size } = props;

  return (
    <div>
      <h3>{name}</h3>
      <div>{size}kg</div>
      <AnimalDetail diet={diet} />
    </div>
  );
}
