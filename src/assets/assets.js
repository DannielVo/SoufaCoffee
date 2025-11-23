import mainLogo_3 from "./Main_Logo_3.png";
import qr_code from "./QR Code.png";

export const assets = {
  mainLogo_3,
  qr_code,
};

export const DASHBOARD_SIDEBAR_KEY = [
  {
    id: 1,
    key: "Dashboard",
    icon: "bxr  bx-home",
  },
  {
    id: 2,
    key: "Staffs",
    icon: "bxr  bx-user-circle",
  },
  {
    id: 3,
    key: "Products",
    icon: "bxr  bx-shopping-bag-alt",
  },
  {
    id: 4,
    key: "Ingredients",
    icon: "bxr  bx-cookie",
  },
  {
    id: 5,
    key: "Warehouse",
    icon: "bxr  bx-warehouse",
  },
  {
    id: 6,
    key: "Recipes",
    icon: "bxr  bx-chef-hat",
  },
  {
    id: 7,
    key: "Orders",
    icon: "bxr  bx-list-ul-square",
  },
  {
    id: 8,
    key: "Preparations",
    icon: "bxr  bx-dropdown",
  },
];

export const ORDER_STATUS = ["Pending", "In-progress", "Done"];

export const STAFF_STATUS = ["Active", "Inactive"];

export const STAFF_COLOR = {
  Active: "active",
  Inactive: "inactive",
};

export const PRODUCT_STATUS = ["Active", "Inactive"];

export const PRODUCT_COLOR = {
  Active: "active",
  Inactive: "inactive",
};

export const INGREDIENT_STATUS = ["Available", "Out_of_stock"];

export const INGREDIENT_COLOR = {
  Available: "available",
  Out_of_stock: "out-of-stock",
};

export const PREP_STATUS = ["Pending", "In-progress", "Done"];

export const PREP_COLOR = {
  Pending: "pending",
  "In-progress": "in-progress",
  Done: "done",
};
