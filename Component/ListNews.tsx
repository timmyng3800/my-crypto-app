import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { getDetailCoinData, getListCoinMarket } from "../services/request";
import SvgUri from "react-native-svg-uri";
type Props = {
  name?: string;
  image?: string;
  symbol?: string;
  current_price?: number;
  price_change?: Float;
  total_volume?: number;
  coinId?: string;
};

type Nav = {
  navigate: (value: string, params: any) => void;
};
const ListNews = (props: Props) => {
  const { name } = props;
  const navigation = useNavigation<Nav>();
  const [coin, setCoin] = useState() as any;

  return (
    <View>
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: "https://c.biztoc.com/p/5c0f12d3893bac30/s.webp" }}
      />
      <Text style={{fontWeight:"700", fontSize:20, marginVertical:20}}>this is title</Text>
      <Text>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    opacity: 0.2,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ListNews;
