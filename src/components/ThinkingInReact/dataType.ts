export type ProductType = {
  category: string;
  price: number;
  stoked: boolean;
  name: string;
};

export const PRODUCT_DATA: ProductType[] = [
  {
    category: "Sporting Goods",
    price: 49.99,
    stoked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: 9.99,
    stoked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: 29.99,
    stoked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: 99.99,
    stoked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: 399.99,
    stoked: false,
    name: "Iphone15",
  },
  {
    category: "Electronics",
    price: 199.99,
    stoked: true,
    name: "Vertu",
  },
];
