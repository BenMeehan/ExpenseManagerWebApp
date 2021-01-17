import React from "react";
import { connect } from "react-redux";
import getExpense from "../selectors/expense";
import expenseTotal from "../selectors/expense-total";

const Summary = ({ expenseCount, expenseTotal }) => {
  const word = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div>
      <h1>
        Showing {expenseCount} {word} of total ₹{expenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = getExpense(state.expense, state.filters);
  return {
    expenseCount: expenses.length,
    expenseTotal: expenseTotal(expenses),
  };
};

export default connect(mapStateToProps)(Summary);
