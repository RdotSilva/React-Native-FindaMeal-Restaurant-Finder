import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation, route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async id => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
