import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import useFilter from "../hooks/useFilter";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const [filterResultsByPrice] = useFilter();

  {
    /* const filterResultsByPrice = (price) => {
    // price === '$' || price === '$$' || price === '$$$'
    // for every result in the results array, check if price is equal to the price we passed in
    return results.filter((result) => {
      return result.price === price;
    });
  };
*/
  }

  return (
    // placeholder element to wrap the rest of the elements
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$", results)}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$", results)}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$", results)}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$", results)}
          title="Make It Rain"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
