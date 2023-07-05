import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    }

    if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    }

    if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.enteredTitle.trim().length === 0) {
      alert("Enter valid date");
    }

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };

    console.log("form", expenseData);

    onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            value={userInput.enteredDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

//   const [enteredTitle, setEneteredTitle] = useState("");
//   const [enteredAmount, setEneteredAmount] = useState(null);

//   const [enteredDate, setEneteredDate] = useState("");

//   const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredTitle: event.target.value };
//     });
//   };
//   const dateChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredDate: event.target.value };
//     });
//   };
//   const amountChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredAmount: event.target.value };
//     });
//   };
