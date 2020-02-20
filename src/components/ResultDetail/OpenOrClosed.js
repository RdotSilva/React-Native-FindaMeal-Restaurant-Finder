import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OpenOrClosed = ({ result }) => {
  return <Text>{result.is_closed ? "CLOSED" : "OPEN"}</Text>;
};

const styles = StyleSheet.create({
  openStyles: {
    color: "#83B692"
  }
});

export default OpenOrClosed;
