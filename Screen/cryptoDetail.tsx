import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "../Component/header";
import Coin from "../data/crypto.json";


const CryptoDetails = () => {
  const { id, symbol, name, image, market_data } = Coin;
  return (
    <View style={styles.container}>
      <Header
        title={name}
        iconRight={<Feather name="star" size={24} color="black" />}
      />
      <View style={{ marginTop: 20 }}>
        <Image
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
            marginBottom: 10,
          }}
          source={{ uri: `${image.large}` }}
        />
        <Text style={{ fontSize: 20, alignSelf: "center" }}>{symbol}</Text>
      </View>
      <View style={styles.container2}>
        <Text>Price</Text>
        <Text style={{ fontSize: 30 }}>${market_data.current_price.usd}</Text>
      </View>
      <View style={styles.container2}>
        <Text>Volume</Text>
        <Text style={{ fontSize: 30 }}>${market_data.total_volume.usd}</Text>
      </View>
      <View style={styles.container2}>
        <Text>Price change</Text>
        {market_data.price_change_percentage_24h < 0 ? (
          <Text style={{ fontSize: 30, color: "red" }}>
            {market_data.price_change_percentage_24h}
          </Text>
        ) : (
          <Text style={{ fontSize: 30, color: "green" }}>
            {market_data.price_change_percentage_24h}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  container2: {
    marginBottom: 10,
  },
});

export default CryptoDetails;
