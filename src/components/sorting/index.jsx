import React from "react";
import { useDispatch, useSelector } from "react-redux";
import checked from "../../assets/icons/check.png";
import { setSorting } from "../../storage/redux/items/action";
import { sortingPreferences } from "../../utils/helpers";
import "./style.scss";
function Sorting() {
  const sort = useSelector((state) => state.items.sorting);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(setSorting(e.target.value));
  return (
    <div className="sorting-wrapper">
      <form>
        {sortingPreferences.map((preference) => (
          <div className="radio-button-wrapper" key={preference}>
            <input
              className={`sorting-radio ${sort === preference ? "active" : ""}`}
              type="radio"
              id={preference}
              name="sort"
              value={preference}
              onChange={handleChange}
            />
            {sort === preference && <img src={checked} />}

            <label className="sorting-label" htmlFor={preference}>
              {preference}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Sorting;
