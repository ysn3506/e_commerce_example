import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompanyFilter,
  setTagFilter,
} from "../../storage/redux/items/action";
import checked from "../../assets/icons/check-white.png";
import { updateProductList } from "../../utils/helpers";
import "./style.scss";

Filtering.propTypes = {
  type: PropTypes.string.isRequired,
};

function Filtering({ type }) {
  const [filters, setFilter] = useState([]);
  const [checks, setChecks] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const selector = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const {
    tags,
    companies,
    totalAmountForCompanies,
    totalAmountForTags,
    filter: { company, tag },
  } = selector;

  // According to Filter Type The Variables below are initialized.
  const dataSource = type === "tag" ? tags : companies;
  const totalAmount =
    type === "tag" ? totalAmountForTags : totalAmountForCompanies;
  const stateAction = type === "tag" ? setTagFilter : setCompanyFilter;
  const filterType = type === "tag" ? tag : company;
  const filterObject = type === "tag" ? "tagName" : "slug";

  const handleChange = async (e, selected) => {
    let elementList;
    if (e.target.checked) {
      elementList = [...filters, selected];
      setFilter(elementList);
      dispatch(stateAction(elementList));
      setChecks([...checks, e.target]);
    } else {
      elementList = filters.filter(
        (f) => f[filterObject] !== selected[filterObject]
      );
      setFilter(elementList);
      dispatch(stateAction(elementList));
      setChecks([...checks.filter((el) => el !== e.target)]);
    }

    updateProductList();
  };

  const removeAll = () => {
    setFilter([]);
    dispatch(stateAction([]));
    checks.forEach((item) => (item.checked = false));
    setChecks([]);
    updateProductList();
  };

  const data = dataSource
    .filter((el) => {
      const id = type === "tag" ? el.tagName : el.name;
      return id.toLowerCase().includes(searchResult.toLowerCase());
    })
    .sort((a, b) => b.amount - a.amount);

  return (
    <div className="sorting-wrapper filter">
      <input
        className="search-box"
        type="text"
        placeholder={`Search ${type}`}
        onChange={(e) => setSearchResult(e.target.value)}
      />
      <form className="checkboxes">
        {searchResult.length === 0 && (
          <div className="radio-button-wrapper" key="all">
            <label className="sorting-label" htmlFor="all">
              <input
                type="checkbox"
                id="all"
                name="filter"
                value="All"
                onChange={() => removeAll()}
                checked={filterType.length === 0}
              />
              <img src={checked} />
              All &nbsp;
              <span className="amounts">{` (${totalAmount})`}</span>
            </label>
          </div>
        )}
        {data.map((el) => {
          const id = type === "tag" ? el.tagName : el.name;
          return (
            <div className="radio-button-wrapper" key={id}>
              <label className="sorting-label" htmlFor={id}>
                <input
                  type="checkbox"
                  id={id}
                  name="filter"
                  value={el}
                  onChange={(e) => handleChange(e, el)}
                />
                <img src={checked} />
                {id}&nbsp;
                <span className="amounts">{`(${el.amount})`}</span>
              </label>
            </div>
          );
        })}
        {data.length === 0 && <p className="no-matches">No matches</p>}
      </form>
    </div>
  );
}

export default Filtering;
