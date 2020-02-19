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

const styles = StyleSheet.create({});

export default Categories;
