import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Categories = ({ result }) => {
  return (
    <FlatList
      data={result.categories}
      keyExtractor={category => category.alias}
      renderItem={({ item }) => {
        return <Text style={styles.categoryStyles}>{item.title}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  categoryStyles: {
    fontSize: 20,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#AE76A6",
    margin: 2,
    padding: 2,
    backgroundColor: "#AE76A6",
    overflow: "hidden"
  }
});

export default Categories;
