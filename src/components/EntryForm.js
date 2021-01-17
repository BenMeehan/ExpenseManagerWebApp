import React from "react";
import DatePicker from "react-date-picker";

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense.description ? props.expense.description : "",
      note: props.expense.note ? props.expense.note : "",
      amount: props.expense.amount ? props.expense.amount.toString() : "",
      createdAt: props.expense.createdAt
        ? new Date(props.expense.createdAt)
        : new Date(),
      error: "",
    };
  }
  handleDescription = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description: description,
      };
    });
  };
  handleNote = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note: note,
      };
    });
  };
  handleAmount = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,5})?$/))
      this.setState(() => {
        return {
          amount: amount,
        };
      });
  };
  handleDateChange = (date) => {
    if (date) {
      this.setState(() => {
        return {
          createdAt: date,
        };
      });
    }
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: "Please enter both description and amount.",
        };
      });
    } else {
      this.setState(() => {
        return {
          error: "",
        };
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: Date.parse(this.state.createdAt),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescription}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
          />
          <DatePicker
            value={this.state.createdAt}
            onChange={this.handleDateChange}
            clearIcon={null}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Optional Note"
            value={this.state.note}
            onChange={this.handleNote}
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default EntryForm;
