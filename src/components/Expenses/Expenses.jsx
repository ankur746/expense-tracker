import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filterExpense = expenses.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filterExpense} />
      <ExpensesList items={filterExpense} />
    </div>
  );
};

export default Expenses;
