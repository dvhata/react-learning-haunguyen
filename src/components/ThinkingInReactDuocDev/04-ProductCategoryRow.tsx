import React from "react";

export default function ProductCategoryRow(props: any) {
  const { category } = props;
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
