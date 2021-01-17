import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import getExpenses from "../selectors/expense";

const ExpenseList = (props) => {
  return (
    <div>
      {props.expenses.map((e) => {
        return <ExpenseListItem key={e.id} {...e} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getExpenses(state.expense, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
