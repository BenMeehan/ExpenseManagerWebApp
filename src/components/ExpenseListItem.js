import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expense";

const ExpenseListItem = (props) => {
  return (
    <div>
      <Link to={`/edit/${props.id}`}>
        <h3>{props.description}</h3>
      </Link>
      <p>₹{props.amount}</p>
      <p>{`${new Date(props.createdAt).toUTCString()}`}</p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
