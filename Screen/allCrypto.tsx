import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import ListItem from "../Component/ListItem";
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from "../Component/header";
import cryptocurrencies from "../data/cryptocurrencies.json";
import { getDetailCoinData, getListCoinMarket } from "../services/request";

const AllCrypto = () => {
  const [coin, setCoin] = useState() as any;
  const [loading, setLoading] = useState(false);

  const fetchCoinDetailData = async () => {
    const coinDetail = await getListCoinMarket();
    if (coinDetail.status === "success") {
      setCoin(coinDetail?.data?.coins);
      setLoading(true);
    } else return null;
  };

  useEffect(() => {
    fetchCoinDetailData();
  }, [0]);

  const CombineList = coin?.map((i: any) => {
    const cryptolist = cryptocurrencies.find((_coin) => _coin.name === i.name);
    return {
      ...cryptolist,
      ...i,
    };
  });
  return (
    <View>
      <Header title="List of Coin" isSHowiconLeft={true} />
      {loading ? (
        <View>
          <FlatList
            style={{ marginBottom: 200 }}
            data={CombineList?.slice(0, 20)}
            renderItem={(item) => (
              <ListItem
                name={item.item.name}
                image={item.item.image}
                current_price={item.item.price}
                symbol={item.item.symbol}
                price_change={item.item.change}
                total_volume={item.item.total_volume}
                coinId={item.item.id}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            style={{ marginTop: 350, marginLeft: 170 }}
            color="blue"
          />
        </View>
      )}
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

export default AllCrypto;
