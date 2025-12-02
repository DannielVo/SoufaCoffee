import React, { useEffect, useState } from "react";
import "./productContent.css";
import { PRODUCTS } from "../../assets/dummyDB";
import StatusDropdown from "../statusDropdown/StatusDropdown";
import { PRODUCT_COLOR, PRODUCT_STATUS } from "../../assets/assets";
import ProductModal from "../modals/productModal/ProductModal";
import { useShop } from "../../context/ShopContext";

const ProductContent = () => {
  const {
    products,
    getProducts,
    searchProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    error,
    loading,
  } = useShop();
  const [productList, setProductList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleUpdateProduct = async (product) => {
    try {
      await updateProduct(product.productId, product);
      alert("Update product successfully!");
    } catch (error) {
      alert(error.detail);
    }
  };

  const handleSubmit = async (data) => {
    if (editData) {
      handleUpdateProduct(data);
    } else {
      try {
        await createProduct(data);
        alert("Create product successfully!");
      } catch (error) {
        alert(error.detail);
      }
    }
    setOpenModal(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setProductList([...products]);
  }, [products]);

  return (
    <>
      <div className="product-list-wrapper">
        <div className="product-list-header">
          <div className="product-left">
            <h2 className="product-list-title">Product List</h2>
          </div>

          <div className="product-right">
            <input
              type="text"
              placeholder="Search..."
              className="product-search"
            />
            <button
              className="product-add-btn"
              onClick={() => {
                setEditData(null); // reset form về chế độ Add
                setOpenModal(true);
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div className="product-list-container">
          <div className="product-grid header">
            <div>No.</div>
            <div>Product</div>
            <div>Price</div>
            <div>Remaining</div>
            <div className="status-col">
              Status<i class="bx bxs-hand-up"></i>{" "}
            </div>
            <div className="actions-col">Actions</div>
          </div>

          {/* List items */}
          {productList.map((product, index) => (
            <div
              className="product-grid item"
              key={`product-${product.productId}`}
            >
              <div>{product.productId}</div>
              <div>{product.productName}</div>
              <div>{formatPrice(product.productPrice)}</div>
              <div>{product.remaining}</div>
              <StatusDropdown
                value={product.status}
                options={PRODUCT_STATUS}
                colorMap={PRODUCT_COLOR}
                onChange={(newStatus) => {
                  setProductList((prev) =>
                    prev.map((p) =>
                      p.productId === product.productId
                        ? { ...p, status: newStatus }
                        : p
                    )
                  );
                }}
              />
              <div className="actions">
                <button
                  className="btn-icon edit"
                  onClick={() => {
                    setEditData(product);
                    setOpenModal(true);
                  }}
                >
                  <i className="bx bx-edit"></i>
                </button>
                <button
                  onClick={() => handleUpdateProduct(product)}
                  className="btn-icon save"
                >
                  <i class="bxr  bx-save"></i>
                </button>
              </div>
            </div>
          ))}

          <div className="product-list-footer">
            {" "}
            <div className="footer-left">
              Total: {productList.length} products
            </div>
            <div className="footer-right">
              <button className="page-btn" disabled={true}>
                Previous
              </button>
              <button className="page-btn active">1</button>
              <button className="page-btn" disabled={true}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={openModal}
        mode={editData ? "edit" : "add"}
        initialData={editData}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => handleSubmit(data)}
      />
    </>
  );
};

export default ProductContent;
