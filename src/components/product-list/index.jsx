import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product-card";
import "./style.scss";

function ProductList() {
  const selector = useSelector((state) => state.items);
  const { products } = selector;

  return (
    <div className="productlist-wrapper">
      {products.map((item) => (
        <ProductCard key={item.added} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
