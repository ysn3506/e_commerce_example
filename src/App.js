import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import { updateProductList } from "./utils/helpers";
import "./App.scss";
import FilterView from "./views/filter-content";
import ProductModal from "./views/product-modal";
import BasketView from "./views/basket-view";

function App() {
  const productCategory = useSelector((state) => state.items.productCategory);

  useEffect(() => {
    updateProductList();
  }, []);

  useEffect(() => {
    updateProductList();
  }, [productCategory]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <FilterView />
        <ProductModal />
        <BasketView />
      </div>

      <Footer />
    </div>
  );
}

export default App;
