import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");

  // Hook data
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cheap Eats"
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Good Value Eats"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Deep Pocket Eats"
          results={filterResultsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
