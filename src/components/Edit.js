import React from "react";
import { connect } from "react-redux";

import EntryForm from "./EntryForm";
import { editExpense } from "../actions/expense";

const Edit = (props) => {
  return (
    <div>
      <EntryForm
        expense={props.expenseName}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/");
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
