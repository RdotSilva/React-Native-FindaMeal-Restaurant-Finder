import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const ImageCollection = ({ result }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({ item }) => {
        return <Image style={styles.imageStyles} source={{ uri: item }} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  imageStyles: { height: 200, width: 200, margin: 5, borderRadius: 10 }
});

export default ImageCollection;
