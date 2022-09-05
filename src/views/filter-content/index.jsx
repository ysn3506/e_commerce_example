import React from "react";
import FilterFrame from "../../components/filter-frame";
import Sorting from "../../components/sorting";
import Filtering from "../../components/filtering";
import { useSelector } from "react-redux";
import './style.scss'

function FilterView() {
  const filterHidden = useSelector((state) => state.items.filterHidden);

  return (
    <div className={`filter-content ${!filterHidden && "active"}`}>
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
  );
}

export default FilterView;
