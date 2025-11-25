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
    status: "Active",
    img: black_coffee,
  },
  {
    id: 2,
    name: "Milk Coffee",
    price: 35000,
    remaining: 7,
    status: "Active",
    img: milk_coffee,
  },
  {
    id: 3,
    name: "White Coffee",
    price: 45000,
    remaining: 3,
    status: "Active",
    img: white_coffee,
  },
  {
    id: 4,
    name: "Salted Coffee",
    price: 45000,
    remaining: 3,
    status: "Active",
    img: salted_coffee,
  },
  {
    id: 5,
    name: "Matcha Latte",
    price: 49000,
    remaining: 10,
    status: "Inactive",
    img: matcha_latte,
  },
  {
    id: 6,
    name: "Chocolate",
    price: 42000,
    remaining: 6,
    status: "Active",
    img: chocolate,
  },
  {
    id: 7,
    name: "Peach Tea",
    price: 38000,
    remaining: 14,
    status: "Inactive",
    img: peach_tea,
  },
  {
    id: 8,
    name: "Lemon Tea",
    price: 35000,
    remaining: 2,
    status: "Active",
    img: lemon_tea,
  },
  {
    id: 9,
    name: "Orange Juice",
    price: 40000,
    remaining: 0,
    status: "Active",
    img: orange_juice,
  },
  {
    id: 10,
    name: "Pineapple Juice",
    price: 42000,
    remaining: 9,
    status: "Active",
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
    product: "Black Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 2,
    product: "Milk Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Condensed milk", quantity: 30, unit: "ml" },
      { name: "Fresh milk", quantity: 50, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 3,
    product: "White Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Fresh milk", quantity: 80, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 4,
    product: "Salted Coffee",
    ingredients: [
      { name: "Coffee powder", quantity: 20, unit: "g" },
      { name: "Condensed milk", quantity: 30, unit: "ml" },
      { name: "Table salt", quantity: 1, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 5,
    product: "Chocolate",
    ingredients: [
      { name: "Cocoa powder", quantity: 15, unit: "g" },
      { name: "Fresh milk", quantity: 90, unit: "ml" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 6,
    product: "Matcha Latte",
    ingredients: [
      { name: "Matcha powder", quantity: 9, unit: "g" },
      { name: "Fresh milk", quantity: 150, unit: "ml" },
      { name: "Sugar", quantity: 10, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 7,
    product: "Peach Tea",
    ingredients: [
      { name: "Tea leaves", quantity: 2, unit: "g" },
      { name: "Peach syrup", quantity: 20, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 8,
    product: "Lemon Tea",
    ingredients: [
      { name: "Tea leaves", quantity: 2, unit: "g" },
      { name: "Lemon syrup", quantity: 20, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 9,
    product: "Orange Juice",
    ingredients: [
      { name: "Orange syrup", quantity: 40, unit: "ml" },
      { name: "Sugar", quantity: 5, unit: "g" },
      { name: "Ice", quantity: 50, unit: "g" },
    ],
  },
  {
    id: 10,
    product: "Pineapple Juice",
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

export const DASHBOARD_STATS = [
  {
    id: 1,
    type: "Revenue",
    icon: "bx bx-dollar-circle",
    title: "Total revenue",
    value: "5000000",
    percentChange: 0.5,
  },
  {
    id: 2,
    type: "Order",
    icon: "bx bx-cart",
    title: "Total orders",
    value: "200",
    percentChange: -0.2,
  },
];

export const MONTHLY_REVENUE_DATA = [
  { month: "Jan", revenue: 32000000 },
  { month: "Feb", revenue: 45000000 },
  { month: "Mar", revenue: 38000000 },
  { month: "Apr", revenue: 50000000 },
  { month: "May", revenue: 62000000 },
  { month: "Jun", revenue: 58000000 },
  { month: "Jul", revenue: 69000000 },
  { month: "Aug", revenue: 72000000 },
  { month: "Sep", revenue: 64000000 },
  { month: "Oct", revenue: 68000000 },
  { month: "Nov", revenue: 75000000 },
  { month: "Dec", revenue: 79000000 },
];

export const DAILY_REVENUE_NOVEMBER = [
  { day: "1", revenue: 12000000 },
  { day: "2", revenue: 9000000 },
  { day: "3", revenue: 15000000 },
  { day: "4", revenue: 18000000 },
  { day: "5", revenue: 11000000 },
  { day: "6", revenue: 13000000 },
  { day: "7", revenue: 17000000 },
  { day: "8", revenue: 10000000 },
  { day: "9", revenue: 9000000 },
  { day: "10", revenue: 20000000 },
  { day: "11", revenue: 14000000 },
  { day: "12", revenue: 16000000 },
  { day: "13", revenue: 8000000 },
  { day: "14", revenue: 9000000 },
  { day: "15", revenue: 19500000 },
  { day: "16", revenue: 17500000 },
  { day: "17", revenue: 14000000 },
  { day: "18", revenue: 18000000 },
  { day: "19", revenue: 12500000 },
  { day: "20", revenue: 15000000 },
  { day: "21", revenue: 16500000 },
  { day: "22", revenue: 10000000 },
  { day: "23", revenue: 9500000 },
  { day: "24", revenue: 17000000 },
  { day: "25", revenue: 15500000 },
  { day: "26", revenue: 13500000 },
  { day: "27", revenue: 8000000 },
  { day: "28", revenue: 14500000 },
  { day: "29", revenue: 16000000 },
  { day: "30", revenue: 19000000 },
];
