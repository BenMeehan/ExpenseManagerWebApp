import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div>
      <Summary />
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
