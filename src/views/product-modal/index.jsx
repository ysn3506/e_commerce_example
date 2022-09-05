import React from "react";
import ProductTypeTab from "../../components/product-tab";
import Pagination from "../../components/paginate";
import ProductList from "../../components/product-list";
import Spinner from "../../components/spinner";
import { useSelector } from "react-redux";
import './style.scss'

function ProductModal() {
  const loading = useSelector((state) => state.items.loading); // loading is exist in order to provide conditional rendering of spinner while data is fetching.

  return (
    <div className="product-modal">
      <ProductTypeTab />
      {loading ? <Spinner /> : <ProductList />}
      <div className="pagination-wrapper">
        <Pagination />
      </div>
    </div>
  );
}

export default ProductModal;
