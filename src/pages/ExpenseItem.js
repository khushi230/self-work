import React, { useState } from "react";

import "../styles/expenseItem.css";
import ExpenseForm from "./ExpenseForm";
const ExpenseItem = ({ expense, deleteById, editById }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const editMode = () => {
    setShowEditForm(!showEditForm);
  };

  const editExpense = (title, price, date) => {
    editById(title, price, date, expense.id);
  };

  return (
    <div>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__day">{expense.date.getDate()}</div>
          <div className="expense-date__month">
            {expense.date.toLocaleString("en-US", { month: "long" })}{" "}
          </div>
          <div className="expense-date__year">
            {expense.date.getFullYear()}{" "}
          </div>
        </div>

        <div className="expense-item__description">
          <h2>{expense.description}</h2>
        </div>
        <div className="expense-item__price"> {expense.price}</div>
        <div>
          <button onClick={editMode} style={{ border: "solid", margin: "3px" }}>
            Edit
          </button>
        </div>
        <div>
          <button
            style={{ border: "solid" }}
            onClick={() => {
              deleteById(expense.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {showEditForm && (
        <ExpenseForm expense={expense} saveExpense={editExpense} comp="edit" />
      )}
    </div>
  );
};

export default ExpenseItem;
