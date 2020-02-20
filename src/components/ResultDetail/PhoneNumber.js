import React from "react";
import { View, Text } from "react-native";

const PhoneNumber = ({ result }) => {
  return (
    <View>
      <Text
        onPress={() => {
          Linking.openURL(`tel:${result.phone}`);
        }}
      >
        {result.display_phone}
      </Text>
    </View>
  );
};

export default PhoneNumber;
