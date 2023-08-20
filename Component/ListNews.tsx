import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { getDetailCoinData, getListCoinMarket } from "../services/request";
import SvgUri from "react-native-svg-uri";
type Props = {
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};

type Nav = {
  navigate: (value: string, params: any) => void;
};
const ListNews = (props: Props) => {
  const { title, url, urlToImage, description } = props;
  const navigation = useNavigation<Nav>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("WebviewScreen", { url })}
    >
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 200, borderRadius: 8 }}
          source={{ uri: urlToImage }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text numberOfLines={4} style={{ fontWeight: "700", fontSize: 18, marginVertical: 10 }}>
            {title}
          </Text>
          <Text
            style={{ marginBottom: 10, fontWeight: "400" }}
            numberOfLines={4}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    borderWidth: 0.5,
    marginHorizontal: 20,
    borderColor: "grey",
    borderRadius: 8,
  },
});

export default ListNews;
