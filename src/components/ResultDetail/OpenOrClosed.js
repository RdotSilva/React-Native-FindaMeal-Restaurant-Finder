import React from "react";
import { View, Text } from "react-native";

const OpenOrClosed = ({ result }) => {
  return <Text>{result.is_closed ? "CLOSED" : "OPEN"}</Text>;
};

export default OpenOrClosed;
