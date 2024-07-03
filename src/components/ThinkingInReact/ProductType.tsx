import React from "react";

export interface IProps {
  category: string;
  products: any;
}

export default function ProductType(props: IProps) {
  console.log("props", props);
  return (
    <>
      <tr>{}</tr>
    </>
  );
}
