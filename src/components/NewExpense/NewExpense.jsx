import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ addExpenseHandler }) => {
  const expenseSaveHandler = (newExpenseFormData) => {
    const expenseData = {
      ...newExpenseFormData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseSaveHandler} />
    </div>
  );
};

export default NewExpense;
