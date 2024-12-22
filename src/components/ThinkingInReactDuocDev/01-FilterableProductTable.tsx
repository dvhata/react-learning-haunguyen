import React from "react";
import SearchBar from "./02-SearchBar";
import ProductTable from "./03-ProductTable";
import { PRODUCT_DATA } from "../ThinkingInReact/dataType";

export default function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable productList={PRODUCT_DATA} />
    </div>
  );
}
