import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProductCategory } from "../../storage/redux/items/action";
import { categoryList } from "../../utils/helpers";
import "./style.scss";

function ProductTypeTab() {
  const currentType = useSelector((state) => state.items.productCategory);
  const dispatch = useDispatch();

  const changeProductCategory = (e) => {
    dispatch(setProductCategory(e.target.innerText));
  };

  return (
    <div className="product-category-wrapper">
      <h2 className="product-header">Products</h2>
      <div className="button-wrapper">
        {categoryList.map((category) => (
          <button
            className={`category-button b-button ${
              category === currentType ? "active" : ""
            }`}
            key={category}
            onClick={changeProductCategory}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductTypeTab;
