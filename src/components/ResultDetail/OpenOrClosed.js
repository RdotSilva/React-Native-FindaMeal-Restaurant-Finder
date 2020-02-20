import React from "react";
import { View, Text, StyleSheet } from "react-native";

const renderOpenOrClosed = result => {
  // Pull the open now data from the hours array returned from API
  const isOpenNow = result.hours[0].is_open_now;

  return isOpenNow ? (
    <Text style={styles.openStyles}>OPEN</Text>
  ) : (
    <Text style={styles.closedStyles}>CLOSED</Text>
  );
};

const OpenOrClosed = ({ result }) => {
  return renderOpenOrClosed(result);
};

const styles = StyleSheet.create({
  openStyles: {
    color: "#83B692",
    alignSelf: "center",
    fontSize: 24,
    margin: 10,
    fontWeight: "bold"
  },
  closedStyles: {
    color: "#D33F49",
    alignSelf: "center",
    fontSize: 24,
    margin: 10,
    fontWeight: "bold"
  }
});

export default OpenOrClosed;
