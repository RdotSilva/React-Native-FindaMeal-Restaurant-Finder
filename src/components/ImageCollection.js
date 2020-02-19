import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const ImageCollection = ({ result }) => {
  return (
    <FlatList
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({ item }) => {
        return <Image style={styles.imageStyles} source={{ uri: item }} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  imageStyles: { height: 200, width: 300 }
});

export default ImageCollection;
