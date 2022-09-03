import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { updateProductList } from "../../utils/helpers";
import arrow from "../../assets/icons/left-arrow.png";
import passiveArrow from "../../assets/icons/arrow-gray.png";

import "./style.scss";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalProductAmount = useSelector(
    (state) => state.items.totalProductAmount
  );

  const pageCount = Math.ceil(totalProductAmount / 16);
  const handlePageChange = (e) => {
    setCurrentPage(e.selected);
    updateProductList(e.selected);
  };

  const nextLabel = () => (
    <div className="arrow-button right">
      Next <img src={currentPage === pageCount - 1 ? passiveArrow : arrow} />
    </div>
  );
  const prevLabel = () => (
    <div className="arrow-button">
      <img src={currentPage === 0 ? passiveArrow : arrow} /> Prev
    </div>
  );

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={nextLabel()}
      onPageChange={handlePageChange}
      pageRangeDisplayed={4}
      marginPagesDisplayed={4}
      pageCount={pageCount}
      previousLabel={prevLabel()}
      containerClassName="pagination-container"
      activeClassName="active-page"
      pageClassName="page-classname"
      renderOnZeroPageCount={null}
      previousClassName="prev-button-class"
      nextClassName="next-button-class"
    />
  );
}

export default Pagination;
