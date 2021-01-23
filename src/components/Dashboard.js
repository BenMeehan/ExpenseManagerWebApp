import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import Summary from "./Summary";
import { Container, Grid, GridItem, Divider } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container py="3%" maxW="3xl">
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={5} rowStart={1} rowEnd={1}>
          <Summary />
          <Divider my={5} />
        </GridItem>
        <GridItem rowStart={2} rowEnd={2} colSpan={5}>
          <ExpenseListFilter />
        </GridItem>
        <GridItem rowStart={3} rowEnd={3} colSpan={5}>
          <ExpenseList />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Dashboard;
