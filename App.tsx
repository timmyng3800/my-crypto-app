import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./Component/ListItem";
import Card from "./Component/Card";
import cryptocurrencies from "./data/cryptocurrencies.json";
import { NavigationContainer } from "@react-navigation/native";
import AllCrypto from "./Screen/allCrypto";
import CryptoDetails from "./Screen/cryptoDetail";

export default function App() {
  return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Crypto Currency Tracker</Text>
        <StatusBar style="auto" />
        <Card title="Market" onPress={() => console.log("Asd")}>
          <FlatList
            data={cryptocurrencies.slice(0, 5)}
            renderItem={(item) => (
              <ListItem
                name={item.item.name}
                image={item.item.image}
                current_price={item.item.current_price}
                symbol={item.item.symbol}
                price_change={item.item.price_change_percentage_24h}
              />
            )}
          />
        </Card> */}
        {/* <AllCrypto/> */}
        <CryptoDetails/>
      </View>
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
