import React from "react";
import ProductCategoryRow from "./04-ProductCategoryRow";
import ProductRow from "./05-ProductRow";
import { ProductType } from "../ThinkingInReact/dataType";

export default function ProductTable(props: any) {
  const { productList } = props;
  console.log({ productList });
  let lastCategory: any = null;
  const rows: any = [];
  productList?.forEach((productItem: ProductType) => {
    if (productItem.category !== lastCategory)
      rows.push(
        <ProductCategoryRow
          key={productItem.category}
          category={productItem.category}
        />
      );
    rows.push(
      <ProductRow
        key={productItem.name}
        name={productItem.name}
        price={productItem.price}
      />
    );
    lastCategory = productItem.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
