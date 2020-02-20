import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PhoneNumber = ({ result }) => {
  return (
    <View>
      <Text
        style={styles.phoneNumberStyles}
        onPress={() => {
          Linking.openURL(`tel:${result.phone}`);
        }}
      >
        {result.display_phone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneNumberStyles: {
    textAlign: "center",
    margin: 10,
    fontSize: 25
  }
});

export default PhoneNumber;
