import React from "react";

function ProductRow(props: any) {
  const { name, price } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
    </tr>
  );
}

export default ProductRow;
