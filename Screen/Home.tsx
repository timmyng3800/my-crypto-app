import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Card from "../Component/Card";
import ListItem from "../Component/ListItem";
import cryptocurrencies from "../data/cryptocurrencies.json";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getDetailCoinData } from "../services/request";
type Nav = {
  navigate: (value: any) => void;
};
export default function Home() {
  const navigation = useNavigation<Nav>();
  const [coin, setCoin] = useState() as any;
  // console.log("coinID",route.params.coinId);

  // const fetchCoinDetailData = async () => {
  //   const coinDetail = await getDetailCoinData(route.params.coinId);
  //   setCoin(coinDetail);
  // };
  // console.log("dsad", coin?.market_data.price_change_percentage_24h);
  // useEffect(() => {
  //   fetchCoinDetailData();
  // }, [0]);
  return (
    <View>
      <Text style={styles.title}>Crypto Currency Tracker</Text>
      <StatusBar style="auto" />
      <Card title="Market" onPress={() => navigation.navigate("ListOfCoin")}>
        <FlatList
          data={cryptocurrencies.slice(0, 5)}
          renderItem={(item) => (
            <ListItem
              name={item.item.name}
              image={item.item.image}
              current_price={item.item.current_price}
              symbol={item.item.symbol}
              price_change={item.item.price_change_percentage_24h}
              total_volume={item.item.total_volume}
              coinId={item.item.id}
            />
          )}
        />
      </Card>
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
