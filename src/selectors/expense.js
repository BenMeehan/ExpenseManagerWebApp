const getExpenses = (expense, { text, sortBy, startDate, endDate }) => {
  return expense
    .filter((e) => {
      const startMatch = startDate
        ? e.createdAt >= Date.parse(startDate)
        : true;
      const endMatch = endDate ? e.createdAt <= Date.parse(endDate) : true;
      const textMatch = e.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startMatch && endMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return 0;
      }
    });
};
export default getExpenses;
