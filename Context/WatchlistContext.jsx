import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWatchList = () => useContext(WishlistContext);

const WatchlistProvider = ({ children }) => {
  const [watchlistcoinId, setWatchlistCoinId] = useState();

  const getWatchlistData = async () => {
    try {
      const jsonvalue = await AsyncStorage.getItem("@watchlist_coins");
      setWatchlistCoinId(jsonvalue != null ? JSON.parse(jsonvalue) : []);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getWatchlistData();
  }, [0]);

  const storeWatchlistcoinId = async (coinId) => {
    try {
      const newWatchlist = [...watchlistcoinId, coinId];
      const jsonvalue = JSON.stringify(newWatchlist);
      await AsyncStorage.setItem("@watchlist_coins", jsonvalue);
      setWatchlistCoinId(newWatchlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCoinId = async (coinId) => {
    const newWatchlist = watchlistcoinId.filter(
      (coinIdvalue) => coinIdvalue != coinId
    );
    const jsonvalue = JSON.stringify(newWatchlist);
    await AsyncStorage.setItem("@watchlist_coins", jsonvalue);
    setWatchlistCoinId(newWatchlist);
  };

  return (
    <WishlistContext.Provider
      value={{ watchlistcoinId, storeWatchlistcoinId, removeCoinId }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WatchlistProvider;
