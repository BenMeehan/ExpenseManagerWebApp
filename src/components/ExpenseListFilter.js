import React from "react";
import DatePicker from "react-date-picker";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";

class ExpenseListFilter extends React.Component {
  state = {
    startDate: this.props.filters.startDate,
    endDate: this.props.filters.endDate,
  };
  handleStartDateChange = (date) => {
    this.setState(() => {
      return {
        startDate: date,
      };
    });
    this.props.dispatch(setStartDate(date));
  };
  handleEndDateChange = (date) => {
    this.setState(() => {
      return {
        endDate: date,
      };
    });
    this.props.dispatch(setEndDate(date));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else {
              this.props.dispatch(sortByDate());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <div>
          <h4>
            Start Date :{" "}
            <DatePicker
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
              clearIcon={null}
            />
          </h4>
          <h4>
            End Date :{" "}
            <DatePicker
              value={this.state.endDate}
              onChange={this.handleEndDateChange}
              clearIcon={null}
            />
          </h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
