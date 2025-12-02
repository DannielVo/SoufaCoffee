import React, { createContext, useContext, useEffect, useState } from "react";
import { HttpStatusCode } from "axios";
import { apiRequest } from "../utils/api";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [listUser, setListUser] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  // PRODUCT STATES
  const [products, setProducts] = useState([]);
  // INGREDIENT STATES
  const [ingredients, setIngredients] = useState([]);
  // WAREHOUSE STATES
  const [warehouseItems, setWarehouseItems] = useState([]);
  const [lowStockIngredients, setLowStockIngredients] = useState([]);

  const [revenue, setRevenue] = useState(null);

  // ===== REVENUE ====================================================
  const getRevenue = async (fromDate = null, toDate = null) => {
    setLoading(true);
    setError(null);

    const query = new URLSearchParams();
    if (fromDate) query.append("fromDate", fromDate);
    if (toDate) query.append("toDate", toDate);

    try {
      const data = await apiRequest("product", `/revenue?${query.toString()}`, {
        method: "GET",
      });

      setRevenue(data);
      return data;
    } catch (err) {
      setError(err.detail || "Failed to get revenue");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== ORDER STATUS (paid -> tạo preparation) =====================
  const updateOrderStatus = async (orderId, payload) => {
    // payload = { orderStatus: "pending" | "paid" | "failed" }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("product", `/orders/${orderId}/status`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to update order status");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== ORDER ITEMS ================================================
  // Lấy danh sách item của 1 order
  const getOrderItems = async (orderId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/order-items/${orderId}`, {
        method: "GET",
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to fetch order items");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Lấy danh sách payments của 1 order
  const getPaymentsByOrder = async (orderId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/payments/${orderId}`, {
        method: "GET",
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to fetch payments");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Tạo payment mới (transaction_type = payment)
  const createPayment = async (payload) => {
    // payload = { orderId, paymentMethod, cashGiven, amount }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/payments`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to create payment");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Thêm item vào order
  const addOrderItem = async (payload) => {
    // payload = { orderId, productId, quantity }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/order-items`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to add order item");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Cập nhật số lượng item trong order
  const updateOrderItem = async (orderItemId, payload) => {
    // payload = { quantity }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/order-items/${orderItemId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to update order item");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Cập nhật trạng thái payment (pending, success, failed)
  const updatePaymentStatus = async (paymentId, payload) => {
    // payload = { transactionStatus }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("order", `/payments/${paymentId}/status`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      return data;
    } catch (err) {
      setError(err.message || "Failed to update payment status");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // ===== ORDERS  ====================================================
  const getOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("order", "/orders", {
        method: "GET",
      });

      // data: OrderBase[]
      return data;
    } catch (err) {
      setError(err.detail || "Cannot fetch orders");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getOrderDetail = async (orderId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("order", `/orders/${orderId}`, {
        method: "GET",
      });

      // data: OrderDetail
      return data;
    } catch (err) {
      setError(err.detail || "Cannot fetch order detail");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (totalAmount = 0) => {
    setLoading(true);
    setError(null);

    try {
      const body = {
        totalAmount: totalAmount, // mặc định = 0
      };

      const data = await apiRequest("order", "/orders", {
        method: "POST",
        body: JSON.stringify(body),
      });

      // data: OrderBase
      return data;
    } catch (err) {
      setError(err.detail || "Cannot create order");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    setLoading(true);
    setError(null);

    try {
      await apiRequest("order", `/orders/${orderId}`, {
        method: "DELETE",
      });

      // 204 no content
      return true;
    } catch (err) {
      setError(err.detail || "Cannot delete order");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== PREPARATION ================================================
  const getPreparations = async (statusFilter = null) => {
    setLoading(true);
    setError(null);

    try {
      let url = "/preparations";
      if (statusFilter) {
        url += `?statusFilter=${statusFilter}`;
      }

      const data = await apiRequest("preparation", url, { method: "GET" });

      // data: PreparationBase[]
      return data;
    } catch (err) {
      setError(err.detail || "Cannot fetch preparations");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getPreparationDetail = async (prepId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("preparation", `/preparations/${prepId}`, {
        method: "GET",
      });

      // data: PreparationDetail
      return data;
    } catch (err) {
      setError(err.detail || "Cannot fetch preparation detail");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getPrepItems = async (prepId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("preparation", `/prep-items/${prepId}`, {
        method: "GET",
      });

      // data: PrepItemModel[]
      return data;
    } catch (err) {
      setError(err.detail || "Cannot fetch prep items");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePreparationStatus = async (prepId, newStatus, staffId = null) => {
    setLoading(true);
    setError(null);

    try {
      const body = {
        prepStatus: newStatus,
        staffId: staffId, // có thể null
      };

      const data = await apiRequest(
        "preparation",
        `/preparations/${prepId}/status`,
        {
          method: "PUT",
          body: JSON.stringify(body),
        }
      );

      // data: PreparationBase
      return data;
    } catch (err) {
      setError(err.detail || "Cannot update preparation status");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deletePreparation = async (prepId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("preparation", `/preparations/${prepId}`, {
        method: "DELETE",
      });

      // 204 no content => không có body
      return true;
    } catch (err) {
      setError(err.detail || "Cannot delete preparation");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== PRODUCT INGREDIENTS (RECIPE) ENDPOINTS =====================
  const getProductIngredients = async (productId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest(
        "product",
        `/product-ingredients/${productId}`,
        {
          method: "GET",
        }
      );

      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch product ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createProductIngredients = async (payload) => {
    // payload: { productId, items: [{ ingredientId, quantityRequired }] }

    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/product-ingredients`, {
        method: "POST",
        body: JSON.stringify({
          productId: payload.productId,
          items: payload.items.map((x) => ({
            ingredientId: x.ingredientId,
            quantityRequired: x.quantityRequired,
          })),
        }),
        //       {
        //   "productId": 1,
        //   "items": [
        //     { "ingredientId": 2, "quantityRequired": 10 }
        //   ]
        // }
      });

      return data; // Danh sách ProductIngredientItem
    } catch (err) {
      setError(err.detail || "Failed to create product ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProductIngredients = async (productId, items) => {
    // items = [{ ingredientId, quantityRequired }]

    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest(
        "product",
        `/product-ingredients/${productId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: items.map((x) => ({
              ingredientId: x.ingredientId,
              quantityRequired: x.quantityRequired,
            })),
          }),
          //         {
          //   "items": [
          //     { "ingredientId": 2, "quantityRequired": 5 }
          //   ]
          // }
        }
      );

      return data;
    } catch (err) {
      setError(err.detail || "Failed to update product ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProductIngredients = async (productId) => {
    setLoading(true);
    setError(null);

    try {
      await apiRequest("product", `/product-ingredients/${productId}`, {
        method: "DELETE",
      });

      return true; // 204 success
    } catch (err) {
      setError(err.detail || "Failed to delete product ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== WAREHOUSE ==================================================
  const getWarehouseItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/warehouse", {
        method: "GET",
      });

      setWarehouseItems(data);
      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch warehouse items");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getWarehouseItemDetail = async (warehouseId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/warehouse/${warehouseId}`, {
        method: "GET",
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch warehouse item detail");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createWarehouseItem = async (item) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/warehouse", {
        method: "POST",
        body: JSON.stringify({
          ingredientId: item.ingredientId,
          stockQuantity: item.stockQuantity,
          price: item.price,
          remaining: item.remaining ?? null, // backend tự gán nếu null
          staffId: item.staffId ?? null,
          description: item.description ?? null,
        }),
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to create warehouse item");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateWarehouseItem = async (warehouseId, updateData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/warehouse/${warehouseId}`, {
        method: "PUT",
        body: JSON.stringify({
          stockQuantity: updateData.stockQuantity ?? null,
          remaining: updateData.remaining ?? null,
          price: updateData.price ?? null,
          staffId: updateData.staffId ?? null,
          description: updateData.description ?? null,
        }),
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to update warehouse item");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getLowStockIngredients = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/warehouse/low-stock", {
        method: "GET",
      });

      setLowStockIngredients(data);
      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch low stock ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== INGREDIENTS ==================================================
  const getIngredients = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/ingredients", {
        method: "GET",
      });

      setIngredients(data);
      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch ingredients");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getIngredientById = async (ingredientId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/ingredients/${ingredientId}`, {
        method: "GET",
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to fetch ingredient detail");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createIngredient = async (ingredient) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/ingredients", {
        method: "POST",
        body: JSON.stringify({
          ingredientName: ingredient.ingredientName,
          ingredientDesc: ingredient.ingredientDesc,
          unit: ingredient.unit,
          lowStockValue: ingredient.lowStockValue,
        }),
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to create ingredient");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateIngredient = async (ingredientId, updateData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/ingredients/${ingredientId}`, {
        method: "PUT",
        body: JSON.stringify(updateData),
      });

      return data;
    } catch (err) {
      setError(err.detail || "Failed to update ingredient");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteIngredient = async (ingredientId) => {
    setLoading(true);
    setError(null);

    try {
      await apiRequest("product", `/ingredients/${ingredientId}`, {
        method: "DELETE",
      });

      return true; // 204 no content
    } catch (err) {
      setError(err.detail || "Failed to delete ingredient");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateIngredientStatus = async (ingredientId, status) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest(
        "product",
        `/ingredients/${ingredientId}/status`,
        {
          method: "PUT",
          body: JSON.stringify({ status }), // 'available' | 'out_of_stock'
        }
      );

      return data;
    } catch (err) {
      setError(err.detail || "Failed to update ingredient status");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== PRODUCTS ==================================================

  // =============================
  // 1. GET ALL ACTIVE PRODUCTS (kèm availability)
  // =============================
  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("product", "/products", {
        method: "GET",
      });
      setProducts(data);
      return data;
    } catch (err) {
      setError(err.detail || "Failed to load products");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // 2. SEARCH PRODUCTS
  // endpoint: /products/search?keyword=...&statusFilter=...
  // =============================
  const searchProducts = async (keyword = "", statusFilter = null) => {
    setLoading(true);
    setError(null);

    try {
      const query = new URLSearchParams();
      if (keyword) query.append("keyword", keyword);
      if (statusFilter) query.append("statusFilter", statusFilter);

      const data = await apiRequest(
        "product",
        `/products/search?${query.toString()}`,
        {
          method: "GET",
        }
      );

      return data; // thường search không cần setProducts
    } catch (err) {
      setError(err.detail || "Failed to search products");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // 3. GET PRODUCT DETAIL
  // =============================
  const getProductById = async (productId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("product", `/products/${productId}`, {
        method: "GET",
      });
      return data;
    } catch (err) {
      setError(err.detail || "Failed to load product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // 4. CREATE NEW PRODUCT (Manager only)
  // =============================
  const createProduct = async (product) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", "/products", {
        method: "POST",
        body: JSON.stringify({
          productName: product.productName,
          productPrice: product.productPrice,
          productImg: product.productImg,
          productDesc: product.productDesc,
        }),
      });
      getProducts();
      return data;
    } catch (err) {
      setError(err.detail || "Failed to create product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // 5. UPDATE PRODUCT (Manager only)
  // =============================
  const updateProduct = async (productId, updateData) => {
    setLoading(true);
    setError(null);

    try {
      const data = await apiRequest("product", `/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify({
          productName: updateData.productName,
          productPrice: Number(updateData.productPrice),
          status: updateData.status,
        }),
      });
      getProducts();
      return data;
    } catch (err) {
      setError(err.detail || "Failed to update product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // 6. DELETE PRODUCT (soft delete)
  // =============================
  const deleteProduct = async (productId) => {
    setLoading(true);
    setError(null);

    try {
      await apiRequest("product", `/products/${productId}`, {
        method: "DELETE",
      });

      return true;
    } catch (err) {
      setError(err.detail || "Failed to delete product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== USER ==================================================
  const getUserDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs/" + user.sub, {
        method: "GET",
      });
      setUserDetails(data);
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs/" + userId, {
        method: "DELETE",
      });
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (userId, user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/profile/" + userId, {
        method: "PUT",
        body: JSON.stringify({
          full_name: user.fullName,
          phone_number: user.phoneNumber,
        }),
      });
      // data: {message}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId, user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs/" + userId, {
        method: "PUT",
        body: JSON.stringify({
          full_name: user.full_name,
          phone_number: user.phone_number,
          role: user.role,
          status: user.status,
          email: user.email,
        }),
      });

      getListUser();
      // data: {message}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs", {
        method: "POST",
        body: JSON.stringify({
          full_name: user.full_name,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role,
        }),
      });
      getListUser();

      // data: {message, staff_id, initial_password}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getListUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs", {
        method: "GET",
      });
      setListUser(data);
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ===== AUTH ==================================================

  // Hàm login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      // Giả sử API trả về token và user info
      setToken(data.access_token);
      setUser(data.user);

      // Lưu token vào localStorage để dùng cho các request sau
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user.role);

      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  //   useEffect(() => {
  //     fetchCustomerInfo(customerId);
  //     fetchAccountInfo(customerId);
  //   }, [customerId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setToken(token);
      if (user) {
        setUser(JSON.parse(user));
      }
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        token,
        loading,
        error,
        login,
        logout,
        getListUser,
        createUser,
        updateUser,
        deleteUser,
        user,
        listUser,
        userDetails,
        getUserDetails,
        updateUserProfile,

        // product functions
        products,
        getProducts,
        searchProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,

        // ingredient functions
        ingredients,
        getIngredients,
        getIngredientById,
        createIngredient,
        updateIngredient,
        deleteIngredient,
        updateIngredientStatus,

        // warehouse states
        warehouseItems,
        lowStockIngredients,

        // warehouse functions
        getWarehouseItems,
        getWarehouseItemDetail,
        createWarehouseItem,
        updateWarehouseItem,
        getLowStockIngredients,

        // product-ingredient recipe functions
        getProductIngredients,
        createProductIngredients,
        updateProductIngredients,
        deleteProductIngredients,

        // prep functions
        getPreparations,
        getPreparationDetail,
        getPrepItems,
        updatePreparationStatus,
        deletePreparation,

        // order functions
        createOrder,
        getOrderDetail,
        getOrders,
        deleteOrder,

        // order items functions
        getOrderItems,
        getPaymentsByOrder,
        createPayment,
        addOrderItem,
        updateOrderItem,
        updatePaymentStatus,

        // others and dashboard functions
        revenue,
        getRevenue,
        updateOrderStatus,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
