import React from "react";
import { connect } from "react-redux";

import EntryForm from "./EntryForm";
import { startEditExpense } from "../actions/expense";

const Edit = (props) => {
  return (
    <div>
      <EntryForm
        expense={props.expenseName}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.match.params.id, expense));
          props.history.push("/dashboard");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenseName: state.expense.find((i) => {
      return i.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(Edit);
