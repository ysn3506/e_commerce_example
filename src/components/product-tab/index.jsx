import React from "react";
import { useSelector } from "react-redux";
import { toggleFiltering } from "../../storage/redux/items/action";
import { setProductCategory } from "../../storage/redux/items/action";
import { categoryList } from "../../utils/helpers";
import closeButton  from "../../assets/icons/close.png";
import filterButton from "../../assets/icons/filter.png";
import "./style.scss";


function ProductTypeTab() {
  const currentType  = useSelector((state) => state.items.productCategory);
  const { filterHidden } = useSelector((state) => state.items);
  const changeProductCategory = (e) => {
    setProductCategory(e.target.innerText);
  };

  return (
    <div className="product-category-wrapper">
      <h2 className="product-header">Products</h2>
      <div className= {`button-wrapper filtering ${!filterHidden ? "active" : ""}`}>
        <button
          className={`category-button b-button ${filterHidden ? "active" : ""}`}
          onClick={() => toggleFiltering()}
        >
          <img src={!filterHidden?closeButton:filterButton} alt="filter" />
        </button>
      </div>
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
