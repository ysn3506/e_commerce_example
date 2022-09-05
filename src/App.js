import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import ErrorBoundary from "./components/error-boundary";
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

  return (// Normally error boundary should be implemented for every each small part so that error handling could be more easier. 
    <div className="App">
      <ErrorBoundary> 
        <Header />
        <div className="content-wrapper">
          <FilterView />
          <ProductModal />
          <BasketView />
        </div>

        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
