import React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../Component/ListItem";
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from "../Component/header";
import cryptocurrencies from "../data/cryptocurrencies.json";

const AllCrypto = () => {
  return (
    <View>
      <Header
        title="List of Coin"
      />
      <View>
        <FlatList
          data={cryptocurrencies}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default AllCrypto;
