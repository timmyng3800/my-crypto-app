import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./Component/ListItem";
import Card from "./Component/Card";
import cryptocurrencies from "./data/cryptocurrencies.json";
import { NavigationContainer } from "@react-navigation/native";
import AllCrypto from "./Screen/allCrypto";
import CryptoDetails from "./Screen/cryptoDetail";
import Navigation from "./navigation";
import { useNavigation } from "@react-navigation/native";
import Home from "./Screen/Home";
import WatchlistProvider from "./Context/WatchlistContext";
export default function App() {
  return (
    <NavigationContainer>
      <WatchlistProvider>
        <Navigation />
      </WatchlistProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: "600",
  },
  line: {
    height: 1,
    backgroundColor: "black",
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginTop: 10,
  },
});
