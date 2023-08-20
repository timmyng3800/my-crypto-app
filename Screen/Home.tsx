import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Card from "../Component/Card";
import ListItem from "../Component/ListItem";
import cryptocurrencies from "../data/cryptocurrencies.json";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  getDetailCoinData,
  getListCoinMarket,
  getNewsCrypto,
} from "../services/request";

import ListNews from "../Component/ListNews";
type Nav = {
  navigate: (value: any) => void;
};
export default function Home() {
  const navigation = useNavigation<Nav>();
  const [coin, setCoin] = useState() as any;
  const [news, setNews] = useState() as any;
  const [loading, setLoading] = useState(false);

  const fetchCoinDetailData = async () => {
    const coinDetail = await getListCoinMarket();
    if (coinDetail.status === "success") {
      setCoin(coinDetail?.data?.coins);
      setLoading(true);
    } else return null;

    const News = await getNewsCrypto();
    if (News.status === "ok") {
      setNews(News.articles);
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
      <Text style={styles.title}>Crypto Currency Tracker</Text>
      <ScrollView nestedScrollEnabled={true}>
        <ScrollView>
          <StatusBar style="auto" />
          <Card
            title="Market"
            hasViewAll={true}
            onPress={() => navigation.navigate("ListOfCoin")}
          >
            <FlatList
              scrollEnabled={false}
              data={CombineList?.slice(0, 5)}
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
          </Card>
        </ScrollView>
        <View style={{ marginBottom: 100 }}>
          <Card title="News" hasViewAll={false}>
            <FlatList
              horizontal
              data={news?.slice(0, 5)}
              renderItem={(item) => (
                <ListNews
                  title={item.item.title}
                  urlToImage={item.item.urlToImage}
                  author={item.item.author}
                  url={item.item.url}
                  description={item.item.description}
                />
              )}
            />
          </Card>
        </View>
      </ScrollView>
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
