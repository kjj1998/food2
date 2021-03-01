export default () => {
  const filterResultsByPrice = (price, results) => {
    // price === '$' || price === '$$' || price === '$$$'
    // for every result in the results array, check if price is equal to the price we passed in
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return [filterResultsByPrice];
};
