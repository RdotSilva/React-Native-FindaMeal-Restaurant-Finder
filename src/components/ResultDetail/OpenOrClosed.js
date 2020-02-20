import React from "react";
import { View, Text, StyleSheet } from "react-native";

const renderOpenOrClosed = result => {
  return result.is_closed ? (
    <Text style={styles.color}>CLOSED</Text>
  ) : (
    <Text>OPEN</Text>
  );
};

const OpenOrClosed = ({ result }) => {
  return renderOpenOrClosed(result);
};

const styles = StyleSheet.create({
  openStyles: {
    color: "#83B692"
  }
});

export default OpenOrClosed;
