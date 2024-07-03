import React from "react";
import _ from "lodash";
import { PRODUCT_DATA, ProductType } from "./dataType";

export default function ProductList() {
  const [checked, setChecked] = React.useState<boolean>();
  const groupByCategory = _.groupBy(PRODUCT_DATA, "category");
  return (
    <>
      <div>
        <input type="search" name="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      Only show products in stock
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          {Object.entries(groupByCategory).map(([category, products]) => {
            return (
              <div>
                <td>{category}</td>
                {products?.map((item: ProductType) => {
                  return (
                    <div>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </tr>
      </table>
    </>
  );
}
