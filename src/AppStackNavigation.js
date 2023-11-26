import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import MainScreen from "./Screens/MainScreen";
import AuthScreen from "./Screens/AuthScreen";

const Stack = createStackNavigator();

export function AppStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AuthScren" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
