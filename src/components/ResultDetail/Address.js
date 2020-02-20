import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

const Address = ({ result }) => {
  const builtAddress = `${result.location.address1} ${result.location.city}, ${result.location.state}`;

  return (
    <View>
      <Text
        onPress={() => {
          Linking.openURL(`http://maps.google.com/maps?daddr=${builtAddress}`);
        }}
        style={styles.addressStyles}
      >
        {builtAddress}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressStyles: { alignSelf: "center" }
});

export default Address;
