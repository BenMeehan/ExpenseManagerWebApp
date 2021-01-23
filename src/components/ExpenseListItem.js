import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expense";

import { SimpleGrid, Box, Text, Button } from "@chakra-ui/react";

const ExpenseListItem = (props) => {
  return (
    <SimpleGrid
      columns={2}
      spacing={4}
      mt={3}
      mb={6}
      p={3}
      border="1px"
      borderColor="grey.200"
      borderRadius="lg"
    >
      <Box>
        <Link to={`/edit/${props.id}`}>
          <Text fontSize="4xl" color="purple.800">
            {props.description}
          </Text>
        </Link>
      </Box>
      <Box>
        <Text fontSize="xl" color="tomato">
          ₹{props.amount}
        </Text>
      </Box>
      <Box>
        <Text color="gray.500">{`${new Date(
          props.createdAt
        ).toUTCString()}`}</Text>
      </Box>
      <Box textAlign="right">
        <Button
          colorScheme="gray"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.id }));
          }}
        >
          Remove
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default connect()(ExpenseListItem);
