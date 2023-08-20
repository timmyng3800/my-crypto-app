import axios from "axios";

export const getDetailCoinData = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getdatacoinchart = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getListCoinMarket = async () => {
  try {
    const response = await axios.get(`https://api.coinranking.com/v2/coins`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNewsCrypto = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&from=2023-07-20&sortBy=publishedAt&apiKey=00794961679940ca87716520439685c7`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getDataForFavouriteList = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
