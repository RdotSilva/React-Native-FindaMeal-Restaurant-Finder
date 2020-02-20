import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Address = ({ result }) => {
  const builtAddress = `${result.location.address1} ${result.location.city}, ${result.location.state}`;
  return (
    <View>
      <Text>
        {result.location.address1} {result.location.city},
        {result.location.state}
      </Text>
    </View>
  );
};

export default Address;
