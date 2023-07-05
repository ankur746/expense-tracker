import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {items.map((item) => (
          <ExpenseItem
            key={item.id}
            expenseDate={new Date(item.date)}
            expenseTitle={item.title}
            expenseAmount={item.amount}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
