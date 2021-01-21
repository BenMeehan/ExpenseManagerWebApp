import React from "react";
import { connect } from "react-redux";

import EntryForm from "./EntryForm";
import { startAddExpense } from "../actions/expense";

const Create = (props) => {
  return (
    <div>
      <EntryForm
        expense={{}}
        onSubmit={(data) => {
          props.dispatch(startAddExpense(data));
          props.history.push("/dashboard");
        }}
      />
    </div>
  );
};

export default connect()(Create);
