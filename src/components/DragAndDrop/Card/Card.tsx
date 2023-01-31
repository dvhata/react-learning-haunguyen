import React from "react";

export interface CardProps {
  title: string;
  img: any;
}

export default function Card(props: CardProps) {
  const { title, img } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      <div className="card__title">
        <p>{title}</p>
      </div>
    </div>
  );
}
