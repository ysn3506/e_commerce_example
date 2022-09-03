import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import ProductList from './components/product-list';
import ProductTypeTab from './components/product-tab';
import { updateProductList } from './utils/helpers';
import Spinner from './components/spinner';
import FilterFrame from './components/filter-frame';
import Sorting from './components/sorting';
import Filtering from './components/filtering';
import Pagination from './components/paginate';
// import { getItems } from './services/API';
// import { setCompanies, setItems, setTags } from './storage/redux/items/action';

function App() {
  const selector = useSelector(state => state.items)
  const { productCategory,loading } = selector;
  useEffect(() => {
    updateProductList();
  }, [])
  

  useEffect(() => {
    updateProductList();
  }, [productCategory]);
 

  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div>
          <FilterFrame title="Sorting">
            <Sorting />
          </FilterFrame>
          <FilterFrame title="Brands">
            <Filtering type="brand" />
          </FilterFrame>
          <FilterFrame title="Tags">
            <Filtering type="tag" />
          </FilterFrame>
        </div>
        <div className="product-modal">
          <ProductTypeTab />
          {loading ? <Spinner /> : <ProductList />}
          <div  className='pagination-wrapper'>
            <Pagination/>
          </div>
        </div>
        <div>placeholder</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
