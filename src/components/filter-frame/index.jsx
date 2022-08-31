import React from "react";
import "./style.scss";

function FilterFrame({ children, title }) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">{title}</h2>
      {children}
    </div>
  );
}

export default FilterFrame;
