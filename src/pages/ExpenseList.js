import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";

import "../styles/expenseList.css";
import { initialExpenses } from "../utils/expense";

const ExpenseList = () => {
  const [expenseList, setExpenseList] = useState(initialExpenses);

  const deleteById = (id) => {
    const updatedArray = expenseList.filter((expense) => id !== expense.id);
    setExpenseList(updatedArray);
  };

  const addExpense = (title, price, date) => {
    const updatedArray = [
      {
        description: title,
        price,
        date: new Date(date),
        id: Math.random() * 10000,
      },
      ...expenseList,
    ];
    setExpenseList(updatedArray);
  };

  const editById = (title, price, date, id) => {
    const updatedArray = [...expenseList];
    updatedArray.forEach((expense) => {
      if (expense.id === id) {
        expense.description = title;
        expense.price = price;
        expense.date = new Date(date);
      }
    });
    setExpenseList(updatedArray);
  };

  return (
    <div className="expenses">
      <ExpenseForm saveExpense={addExpense} comp="add" />
      {expenseList.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            expense={expense}
            deleteById={deleteById}
            editById={editById}
          />
        </div>
      ))}
    </div>
  );
};
export default ExpenseList;
