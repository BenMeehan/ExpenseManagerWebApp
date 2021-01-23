import React from "react";
import DatePicker from "react-date-picker";

import { Button, Container, Flex, Textarea } from "@chakra-ui/react";
import { VStack, Input, Heading } from "@chakra-ui/react";

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
      <Container my={10}>
        <VStack>
          {this.state.error && (
            <Heading pb={5} size="lg">
              {this.state.error}
            </Heading>
          )}
        </VStack>
        <form onSubmit={this.handleFormSubmit}>
          <VStack pb={5}>
            <Input
              size="lg"
              focusBorderColor="pink.400"
              variant="filled"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </VStack>
          <VStack pb={5}>
            <Input
              size="lg"
              focusBorderColor="green.400"
              type="number"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.handleAmount}
            />
          </VStack>
          <VStack pb={5}>
            <Flex>
              <Heading size="sm" mr={20}>
                Date :{" "}
              </Heading>
              <DatePicker
                value={this.state.createdAt}
                onChange={this.handleDateChange}
                clearIcon={null}
              />
            </Flex>
          </VStack>
          <VStack pb={5}>
            <Textarea
              focusBorderColor="yellow.400"
              cols="30"
              rows="10"
              placeholder="Optional Note"
              value={this.state.note}
              onChange={this.handleNote}
            ></Textarea>
          </VStack>
          <VStack>
            <Button type="submit" colorScheme="twitter">
              Add
            </Button>
          </VStack>
        </form>
      </Container>
    );
  }
}

export default EntryForm;
