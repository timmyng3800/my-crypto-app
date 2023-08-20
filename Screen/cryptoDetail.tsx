import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "../Component/header";
import Coin from "../data/crypto.json";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { getDetailCoinData, getdatacoinchart } from "../services/request";
import { AntDesign } from "@expo/vector-icons";
export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];
export const { width: SIZE } = Dimensions.get("window");

type Route = RouteProp<{
  params: {
    name?: string;
    image?: string;
    prices?: number;
    symbol?: string;
    current_price?: number;
    price_change: number;
    total_volume: number;
    coinId?: string;
    nameToLowerCase?: string;
  };
}>;
const CryptoDetails = () => {
  const route = useRoute<Route>();
  const [coin, setCoin] = useState() as any;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState() as any;

  const fetchCoinDetailData = async () => {
    setLoading(false);
    const coinDetail = await getDetailCoinData(route.params.coinId);
    const coinChart = await getdatacoinchart(route.params.coinId);

    setCoin(coinDetail);
    setChartData(coinChart);
    setLoading(true);
  };
  useEffect(() => {
    fetchCoinDetailData();
  }, [0]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ChartPathProvider
          data={{
            points: chartData?.prices.map((price: any) => ({
              x: price[0],
              y: price[1],
            })),
            smoothingStrategy: "bezier",
          }}
        >
          <Header
            title={route.params.name}
            iconRight={<AntDesign name="star" size={24} color="black" />}
            iconRightTick={<Feather name="star" size={24} color="black" />}
            isSHowiconLeft={true}
            coinId={route.params.coinId}
          />
          <View style={{ marginTop: 20 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginBottom: 10,
              }}
              source={{ uri: `${coin?.image.small}` }}
            />
            <Text style={{ fontSize: 20, alignSelf: "center" }}>
              {route.params.symbol}
            </Text>
          </View>
          <View style={styles.container2}>
            <Text>Price</Text>
            <Text style={{ fontSize: 30 }}>
              ${coin?.market_data.current_price.usd}
            </Text>
          </View>
          <View style={styles.container2}>
            <Text>Volume</Text>
            <Text style={{ fontSize: 30 }}>
              ${coin?.market_data.total_volume.usd}
            </Text>
          </View>
          <View style={styles.container2}>
            <Text>Price change 24h</Text>
            {coin?.market_data.price_change_percentage_24h < 0 ? (
              <Text style={{ fontSize: 30, color: "red" }}>
                {coin?.market_data.price_change_percentage_24h}
              </Text>
            ) : (
              <Text style={{ fontSize: 30, color: "green" }}>
                {coin?.market_data.price_change_percentage_24h}
              </Text>
            )}
          </View>
          <View>
            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
            <ChartDot style={{ backgroundColor: "blue" }} />
          </View>
        </ChartPathProvider>
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
    marginHorizontal: 20,
  },
  container2: {
    marginBottom: 10,
  },
  center: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CryptoDetails;
