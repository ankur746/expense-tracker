import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    id: "e4",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenseList, setExpenseList] = useState(expenses);
  const onAddExpenseHandler = (expData) => {
    setExpenseList([expData, ...expenseList]);
  };
  return (
    <>
      <h2>Let's get started!</h2>
      <NewExpense addExpenseHandler={onAddExpenseHandler} />
      <Expenses expenses={expenseList} />
    </>
  );
}

export default App;
