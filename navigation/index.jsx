import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllCrypto from "../Screen/allCrypto";
import Home from "../Screen/Home";
import CryptoDetails from "../Screen/cryptoDetail";
import WebViewScreen from "../Screen/WebViewScreen";
import BottomTabBar from "./BottomTabBar";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabBar}></Stack.Screen>
      <Stack.Screen name="ListOfCoin" component={AllCrypto}></Stack.Screen>
      <Stack.Screen
        name="DetailScreen"
        component={CryptoDetails}
      ></Stack.Screen>
      <Stack.Screen
        name="WebviewScreen"
        component={WebViewScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
