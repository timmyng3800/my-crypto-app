import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, FlatList, RefreshControl, ActivityIndicator } from "react-native";

import Header from "../Component/header";
import { useWatchList } from "../Context/WatchlistContext";
import ListItem from "../Component/ListItem";
import { getDataForFavouriteList } from "../services/request";
const FavouriteCoin = () => {
  const { watchlistcoinId } = useWatchList();
  const [getData, setGetData] = useState();
  const [loading, setLoading] = useState(false);
  const GetlistofDetails = async () => {
    const coinDetail = await getDataForFavouriteList(watchlistcoinId);
    if (coinDetail) {
      setGetData(coinDetail);
      setLoading(true)
    } else return null;
    console.log("coindetail", coinDetail);
  };
  useEffect(() => {
    GetlistofDetails();
  }, [0]);
  console.log("this is value from context", watchlistcoinId);

  return (
    <View>
      <Header title="Favourite Coins" isSHowiconLeft={false} />
      <View style={{height:800}}>
        <FlatList
          data={getData}
          renderItem={(item) => (
            <ListItem
              image={item.item.image}
              price_change={item.item.price_change_percentage_24h}
              name={item.item.name}
              symbol={item.item.symbol}
              current_price={item.item.current_price}
              coinId={item.item.id}
            />
          )}
          refreshControl={
            <RefreshControl 
            refreshing={loading}
            tintColor="blue"
            onRefresh={GetlistofDetails}
            />
          }
        />
      </View>
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

export default FavouriteCoin;
