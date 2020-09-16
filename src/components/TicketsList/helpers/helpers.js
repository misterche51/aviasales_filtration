const filtersMap = {
  0: 'without',
  1: 'one',
  2: 'two',
  3: 'three',
};

const getActualTicketsList = (data, selectedFilters, sortingBy) => data.filter(
  ({ segments }) => {
    const { stops } = segments[0];
    const { length } = stops
    return selectedFilters.includes(filtersMap[length])
  })
  .sort((a, b) =>
    sortingBy === 'price' ? a.price - b.price : a.segments[0].duration - b.segments[0].duration
  );

  export {getActualTicketsList}