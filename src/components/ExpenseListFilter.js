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

import { SimpleGrid, Box, Heading, Input, Select } from "@chakra-ui/react";

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
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box my={6}>
          <Input
            focusBorderColor="lime"
            type="text"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
            placeholder="search"
          />
        </Box>
        <Box>
          <Heading size="sm" pb={1}>
            Sort By
          </Heading>
          <Select
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
          </Select>
        </Box>
        <Box>
          <Heading size="sm" pb={3}>
            Start Date :{" "}
          </Heading>
          <DatePicker
            value={this.state.startDate}
            onChange={this.handleStartDateChange}
            clearIcon={null}
          />
        </Box>
        <Box>
          <Heading size="sm" pb={3}>
            End Date :{" "}
          </Heading>
          <DatePicker
            value={this.state.endDate}
            onChange={this.handleEndDateChange}
            clearIcon={null}
          />
        </Box>
      </SimpleGrid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
