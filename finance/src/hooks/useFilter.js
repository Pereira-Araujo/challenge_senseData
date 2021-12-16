export const useFilter = (search, arr) => {
  if (!!search) {
    return arr.filter((operation) => {
      return (
        operation.amount.toLowerCase().includes(search.toLowerCase()) ||
        operation.type.toLowerCase().includes(search.toLowerCase()) ||
        operation.category.toLowerCase().includes(search.toLowerCase()) ||
        operation.date.toLowerCase().includes(search.toLowerCase()) ||
        operation.title.toLowerCase().includes(search.toLowerCase())

      );
    });
  } else {
    return arr;
  }
};
