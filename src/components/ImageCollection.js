import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ImageCollection = ({ result }) => {
  return (
    <FlatList
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({ item }) => {
        return <Image source={{ uri: item }} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ImageCollection;
