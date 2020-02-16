import React from "react";

// React navigation
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./../screens/SearchScreen";
import HomeScreen from "./../screens/HomeScreen";
import ResultsShowScreen from "./../screens/ResultsShowScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{ title: "Results Show" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
