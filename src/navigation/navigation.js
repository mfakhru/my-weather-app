// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyZi Weather" component={FormScreen} />
        <Stack.Screen name="Weather Main Menu" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
