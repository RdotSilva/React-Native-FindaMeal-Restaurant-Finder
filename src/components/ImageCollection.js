import React from "react";
import { View, Text, FlatList } from "react-native";

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

export default ImageCollection;
