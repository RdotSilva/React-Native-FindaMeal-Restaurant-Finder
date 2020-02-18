import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation, route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
