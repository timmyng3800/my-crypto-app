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
    const response = await axios.get(  
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h&locale=en`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

