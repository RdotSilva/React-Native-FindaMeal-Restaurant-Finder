import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation, route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.containerStyles}>
      <Text style={styles.titleStyles}>{result.name}</Text>
      <FlatList
        data={result.categories}
        keyExtractor={category => category.alias}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Text>{result.is_closed ? "CLOSED" : "OPEN"}</Text>
      <Text
        onPress={() => {
          Linking.openURL(`tel:${result.phone}`);
        }}
      >
        {result.display_phone}
      </Text>
      <Text>{result.review_count} Total Reviews</Text>
      <Text>{result.rating} / 5 Rating</Text>
      <Text>
        {result.location.address1} {result.location.city},
        {result.location.state}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyles} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  },
  titleStyles: {
    fontSize: 50,
    alignSelf: "center"
  },
  imageStyles: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
