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
    unit: "g",
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
    unit: "ml",
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
    unit: "ml",
    staff_add: "Nguyen Van A",
    last_edit: "Tran B",
  },
];

export const PREP_LIST = [
  {
    id: 101,
    status: "Pending",
    created_at: "2025-01-05 10:45",
    staff: "Nguyen Van A",
  },
  {
    id: 102,
    status: "Done",
    created_at: "2025-01-05 10:45",
    staff: "Nguyen Van A",
  },
  {
    id: 103,
    status: "In-progress",
    created_at: "2025-01-05 10:45",
    staff: "Nguyen Van A",
  },
];

export const INGREDIENT_LIST = [
  {
    id: 1,
    name: "Coffee powder",
    unit: "g",
    remaining: 1200,
    status: "Available",
  },
  {
    id: 2,
    name: "Condensed milk",
    unit: "ml",
    remaining: 3000,
    status: "Available",
  },
  {
    id: 3,
    name: "Fresh milk",
    unit: "ml",
    remaining: 5,
    status: "Out-of-stock",
  },
  {
    id: 4,
    name: "Table salt",
    unit: "g",
    remaining: 850,
    status: "Available",
  },
  {
    id: 5,
    name: "Whipping cream",
    unit: "ml",
    remaining: 500,
    status: "Available",
  },
  {
    id: 6,
    name: "Ice",
    unit: "g",
    remaining: 10000,
    status: "Available",
  },
  {
    id: 7,
    name: "Cocoa powder",
    unit: "g",
    remaining: 200,
    status: "Available",
  },
  {
    id: 8,
    name: "Matcha powder",
    unit: "g",
    remaining: 50,
    status: "Available",
  },
  {
    id: 9,
    name: "Tea leaves",
    unit: "g",
    remaining: 0,
    status: "Out-of-stock",
  },
  {
    id: 10,
    name: "Sugar",
    unit: "g",
    remaining: 1200,
    status: "Available",
  },
  {
    id: 11,
    name: "Lemon syrup",
    unit: "ml",
    remaining: 500,
    status: "Available",
  },
  {
    id: 12,
    name: "Peach syrup",
    unit: "ml",
    remaining: 150,
    status: "Available",
  },
  {
    id: 13,
    name: "Honey",
    unit: "ml",
    remaining: 0,
    status: "Out-of-stock",
  },
  {
    id: 14,
    name: "Orange syrup",
    unit: "ml",
    remaining: 700,
    status: "Available",
  },
  {
    id: 15,
    name: "Pineapple syrup",
    unit: "ml",
    remaining: 90,
    status: "Available",
  },
];

export const RECIPE_LIST = [
  {
    id: 1,
    name: "Black Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 2,
    name: "Milk Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Condensed milk", quantity: 30, unit: "ml" },
      { name: "Fresh milk", quantity: 50, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 3,
    name: "White Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Fresh milk", quantity: 80, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 4,
    name: "Salted Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Condensed milk", quantity: 30, unit: "ml" },
      { name: "Table salt", quantity: 1, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 5,
    name: "Chocolate",
    ingredients: [
      { name: "Cocoa powder", quantity: 15, unit: "g" },
      { name: "Fresh milk", quantity: 90, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 6,
    name: "Matcha Latte",
    ingredients: [
      { name: "Matcha powder", quantity: 9, unit: "g" },
      { name: "Fresh milk", quantity: 150, unit: "ml" },
      { name: "Sugar", quantity: 10, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 7,
    name: "Peach Tea",
    ingredients: [
      { name: "Tea leaves", quantity: 2, unit: "g" },
      { name: "Peach syrup", quantity: 20, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 8,
    name: "Lemon Tea",
    ingredients: [
      { name: "Tea leaves", quantity: 2, unit: "g" },
      { name: "Lemon syrup", quantity: 20, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 9,
    name: "Orange Juice",
    ingredients: [
      { name: "Orange syrup", quantity: 40, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 10,
    name: "Pineapple Juice",
    ingredients: [
      { name: "Pineapple syrup", quantity: 40, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
];

export const STAFF_LIST = [
  {
    id: "S101",
    email: "nguyenvana@citycoffee.com",
    name: "Nguyễn Văn A",
    phone: "0912345678",
    role: "Cashier",
    status: "Active",
  },
  {
    id: "S102",
    email: "tranthib@citycoffee.com",
    name: "Trần Thị B",
    phone: "0987654321",
    role: "Barista",
    status: "Active",
  },
  {
    id: "S103",
    email: "leminhc@citycoffee.com",
    name: "Lê Minh C",
    phone: "0932111222",
    role: "Barista",
    status: "Inactive",
  },
  {
    id: "S104",
    email: "phamquocd@citycoffee.com",
    name: "Phạm Quốc D",
    phone: "0905123123",
    role: "Manager",
    status: "Active",
  },
  {
    id: "S105",
    email: "hoangthie@citycoffee.com",
    name: "Hoàng Thị E",
    phone: "0977888999",
    role: "Cashier",
    status: "Inactive",
  },
  {
    id: "S106",
    email: "doanthif@citycoffee.com",
    name: "Đoàn Thị F",
    phone: "0918334455",
    role: "Barista",
    status: "Active",
  },
];
