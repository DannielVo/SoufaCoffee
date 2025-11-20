import black_coffee from "./ca-phe-den.jpg";
import milk_coffee from "./ca-phe-sua.jpg";
import white_coffee from "./bac-xiu.jpg";
import salted_coffee from "./ca-phe-muoi.jpg";
import matcha_latte from "./matcha-latte.png";
import chocolate from "./chocolate.jpg";
import peach_tea from "./tra-dao.jpg";
import lemon_tea from "./tra-chanh.jpg";
import orange_juice from "./Orange-Juice.jpg";
import pineapple_juice from "./pineapple-juice.jpg";

export const PRODUCT_IMGS = [
  black_coffee,
  milk_coffee,
  white_coffee,
  salted_coffee,
  matcha_latte,
  chocolate,
  peach_tea,
  lemon_tea,
  orange_juice,
  pineapple_juice,
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Black Coffee",
    price: 30000,
    remaining: 12,
    img: black_coffee,
  },
  {
    id: 2,
    name: "Milk Coffee",
    price: 35000,
    remaining: 7,
    img: milk_coffee,
  },
  {
    id: 3,
    name: "White Coffee",
    price: 45000,
    remaining: 3,
    img: white_coffee,
  },
  {
    id: 4,
    name: "Salted Coffee",
    price: 45000,
    remaining: 3,
    img: salted_coffee,
  },
  {
    id: 5,
    name: "Matcha Latte",
    price: 49000,
    remaining: 10,
    img: matcha_latte,
  },
  {
    id: 6,
    name: "Chocolate",
    price: 42000,
    remaining: 6,
    img: chocolate,
  },
  {
    id: 7,
    name: "Peach Tea",
    price: 38000,
    remaining: 14,
    img: peach_tea,
  },
  {
    id: 8,
    name: "Lemon Tea",
    price: 35000,
    remaining: 2,
    img: lemon_tea,
  },
  {
    id: 9,
    name: "Orange Juice",
    price: 40000,
    remaining: 0,
    img: orange_juice,
  },
  {
    id: 10,
    name: "Pineapple Juice",
    price: 42000,
    remaining: 9,
    img: pineapple_juice,
  },
];

export const ORDER_SUMMARY = [
  {
    id: 1,
    name: "White Coffee",
    price: 45000,
    quantity: 1,
    remaining: 5,
  },
  {
    id: 2,
    name: "Chocolate",
    price: 42000,
    quantity: 2,
    remaining: 3,
  },
  {
    id: 3,
    name: "Peach Tea",
    price: 38000,
    quantity: 1,
    remaining: 1,
  },
];

export const ORDER_PAYMENT = [
  { id: 1, name: "Black Coffee", price: 30000, qty: 2 },
  { id: 2, name: "Milk Coffee", price: 35000, qty: 1 },
];

export const ORDER_LIST = [
  {
    id: 101,
    total: 95000,
    created_at: "2025-01-05 10:45",
    status: "Pending",
    staff: "Nguyen Van A",
  },
  {
    id: 102,
    total: 155000,
    created_at: "2025-01-05 11:10",
    status: "Paid",
    staff: "Nguyen Van A",
  },
  {
    id: 103,
    total: 45000,
    created_at: "2025-01-05 11:30",
    status: "Paid",
    staff: "Nguyen Van A",
  },
  {
    id: 104,
    total: 45000,
    created_at: "2025-12-23 11:30",
    status: "Paid",
    staff: "Nguyen Van A",
  },
  {
    id: 105,
    total: 45000,
    created_at: "2025-08-10 11:30",
    status: "Failed",
    staff: "Nguyen Van A",
  },
  {
    id: 106,
    total: 45000,
    created_at: "2025-02-22 11:30",
    status: "Paid",
    staff: "Nguyen Van A",
  },
];

export const TRANSACTIONS = [
  {
    id: 1,
    method: "Cash",
    cash_given: 100000,
    amount: 50000,
    status: "Success",
    type: "Payment",
    created_at: "2025-01-03 14:40",
  },
  {
    id: 2,
    method: "Ewallet",
    cash_given: null,
    amount: 45000,
    status: "Success",
    type: "Payment",
    created_at: "2025-01-03 14:47",
  },
  {
    id: 3,
    method: "Ewallet",
    cash_given: null,
    amount: 45000,
    status: "Success",
    type: "Refund",
    created_at: "2025-01-03 14:47",
  },
];

export const WAREHOUSE_DATA = [
  {
    id: 1,
    name: "Coffee powder",
    stock_quantity: 5000,
    price: "200000",
    date_stock_in: "2025-01-20",
    remaining: 2000,
    staff_add: "Nguyen Van A",
    last_edit: "Tran B",
  },
  {
    id: 2,
    name: "Whipping cream",
    stock_quantity: 5000,
    price: "200000",
    date_stock_in: "2025-01-20",
    remaining: 2000,
    staff_add: "Nguyen Van A",
    last_edit: "Tran B",
  },
  {
    id: 3,
    name: "Condensed milk",
    stock_quantity: 5000,
    price: "200000",
    date_stock_in: "2025-01-20",
    remaining: 2000,
    staff_add: "Nguyen Van A",
    last_edit: "Tran B",
  },
];
