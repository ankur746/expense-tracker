import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ eDate }) => {
  const year = eDate.getFullYear();
  const month = eDate.toLocaleString("en-US", { month: "long" });
  const date = eDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__month"> {month} </div>
    </div>
  );
};

export default ExpenseDate;
