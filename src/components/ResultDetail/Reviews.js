import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Reviews = ({ result }) => {
  return (
    <View>
      <Text>{result.review_count} Total Reviews</Text>
      <Text>{result.rating} / 5 Rating</Text>
    </View>
  );
};

export default Reviews;
