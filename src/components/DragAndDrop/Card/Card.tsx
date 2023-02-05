import React from "react";
import "./Card.scss";

export interface CardProps {
  item: any;
}

export default function Card(props: CardProps) {
  const { item } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={item?.img} alt="" />
      </div>
      <div className="card__title">
        <p>{item?.title}</p>
      </div>
    </div>
  );
}
