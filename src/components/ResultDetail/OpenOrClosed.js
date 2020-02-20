import React from "react";
import { View, Text, StyleSheet } from "react-native";

const renderOpenOrClosed = result => {
  return result.is_closed ? (
    <Text style={styles.openStyles}>CLOSED</Text>
  ) : (
    <Text style={styles.closedStyles}>OPEN</Text>
  );
};

const OpenOrClosed = ({ result }) => {
  return renderOpenOrClosed(result);
};

const styles = StyleSheet.create({
  openStyles: {
    color: "#83B692",
    alignSelf: "center",
    fontSize: 22
  },
  closedStyles: {
    color: "#D33F49",
    alignSelf: "center",
    fontSize: 22
  }
});

export default OpenOrClosed;
