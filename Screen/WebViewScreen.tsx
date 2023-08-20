import React, { useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";

import Header from "../Component/header";
import WebView from "react-native-webview";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebViewSource } from "react-native-webview/lib/WebViewTypes";
type Route = RouteProp<{
  params: {
    url: string;
  };
}>;

const WebViewScreen = () => {
  const route = useRoute<Route>();
  return (
    <View>
      <Header title="News" />
      <View style={{height:"100%"}}>
        <WebView
          source={{ uri: route.params.url }}
          style={{ flex: 1 }}
        ></WebView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  center: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WebViewScreen;
