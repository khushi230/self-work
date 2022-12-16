import React, { useState } from "react";
import { format } from "date-fns";
import "../styles/expenseForm.css";

const ExpenseForm = ({ saveExpense, expense, comp }) => {
  const [title, setTitle] = useState(
    expense?.description ? expense.description : ""
  );

  const [price, setPrice] = useState(expense?.price ? expense.price : "");
  const [date, setDate] = useState(
    expense?.date ? format(new Date(expense.date), "yyyy-MM-dd") : ""
  );

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveExpense(title, price, date);

    setDate("");
    setPrice("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div style={{ display: "block" }}>
          <div style={{ display: "inline-block", margin: "10px" }}>
            <label className="new-expense__control label">Description* </label>
            <input
              onChange={handleTitleChange}
              value={title}
              className="new-expense__control input"
              type="text"
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <label className="new-expense__control label">Price* </label>
            <input
              onChange={handlePriceChange}
              value={price}
              className="new-expense__control input"
              type="number"
            />
          </div>
        </div>
        <div style={{ display: "block" }}>
          <div style={{ display: "inline-block", margin: "10px" }}>
            <label className="new-expense__control label">Date* </label>
            <input
              onChange={handleDateChange}
              value={date}
              className="new-expense__control input"
              type="date"
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <button type="submit" disabled={!price || !title || !date}>
              {comp === "edit" ? "Update" : "Add"}
            </button>
          </div>
          <span>* Fields are necessary</span>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
