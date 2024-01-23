import axios from "axios";

export const getCoinPrices =async (id, days, toggleItem) => {
  const myData =await axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((res) => {
      console.log(res.data[toggleItem]);
      return res.data[toggleItem];
    })
    .catch((error) => {
      console.log(error);
    });
  return myData;
}