import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/initialize";

const ExpenseForm = (props) => {
  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );
  const [note, setNote] = useState(props.expense ? props.expense.note : "");
  const [amount, setAmount] = useState(
    props.expense ? (props.expense.amount / 100).toString() : ""
  );
  const [createdAt, setCreatedAt] = useState(
    props.expense ? moment(props.expense.createdAt) : moment()
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  function onDescriptionChange(event) {
    const description = event.target.value;
    setDescription({ description });
  }
  function onNoteChange(event) {
    const note = event.target.value;
    setNote({ note });
  }
  function onAmountChange(event) {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount({ amount });
    }
  }
  function onDateChange(createdAt) {
    if (createdAt) {
      setCreatedAt({ createdAt });
    }
  }
  function onFocusChange({ focused }) {
    setCalendarFocused({ calendarFocused: focused });
  }
  function onSubmit(event) {
    event.preventDefault();

    if (!description || !amount) {
      setError({ error: "Please provide description and amount." });
    } else {
      setError({ error: "" });
      props.onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note,
      });
    }
  }
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={onDateChange}
          focused={calendarFocused}
          onFocusChange={onFocusChange}
          id="1"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={onNoteChange}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
