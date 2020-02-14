import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  // Hook data
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList title="Cheap Eats" results={filterResultsByPrice("$")} />
        <ResultsList
          title="Good Value Eats"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title="Deep Pocket Eats"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
