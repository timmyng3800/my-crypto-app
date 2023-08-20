import React, { ReactNode } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useWatchList } from "../Context/WatchlistContext";
type Props = {
  title?: string;
  iconRight?: ReactNode;
  iconRightTick?: ReactNode;
  isSHowiconLeft?: boolean;
  coinId?: string;
};

const Header = (props: Props) => {
  const { title, iconRight, isSHowiconLeft, coinId, iconRightTick } = props;
  const navigation = useNavigation();
  const { watchlistcoinId, storeWatchlistcoinId, removeCoinId } =
    useWatchList();
  const checkifCoinisinWatchlist = () => {
    return watchlistcoinId.some((coinIdValue: any) => coinIdValue === coinId);
  };

  const handleWatchlistCoin = () => {
    if (checkifCoinisinWatchlist()) {
      return removeCoinId(coinId);
    } else return storeWatchlistcoinId(coinId);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {isSHowiconLeft ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ marginTop: 5 }}>
              <Ionicons name="chevron-back" size={28} color="black" />
            </View>
          </TouchableOpacity>
        ) : null}

        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={() => handleWatchlistCoin()}>
          {checkifCoinisinWatchlist() ? (
            <View style={{ marginTop: 5 }}>{iconRight}</View>
          ) : (
            <View style={{ marginTop: 5 }}>{iconRightTick}</View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
});

export default Header;
