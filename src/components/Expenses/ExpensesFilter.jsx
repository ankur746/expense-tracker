import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option key="2022" value="2022">
            2022
          </option>
          <option key="2021" value="2021">
            2021
          </option>
          <option key="2020" value="2020">
            2020
          </option>
          <option key="2019" value="2019">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
