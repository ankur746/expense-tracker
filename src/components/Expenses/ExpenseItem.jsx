import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({
  expenseDate,
  expenseTitle,
  expenseAmount,
  changeHandler,
}) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate eDate={expenseDate} />

        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__amount"> $ {expenseAmount}</div>
          <button onClick={changeHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
