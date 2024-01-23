import axios from "axios";

export async function getData() {
  try {
    let myCoin =await JSON.parse(localStorage.getItem("coindata")) || [];
    if (myCoin.length == 0) {
      let data = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        { crossDomain: true }
      )
        .then((res) => {
          localStorage.setItem("coindata", JSON.stringify(res.data));
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return data;
    } else {
      return myCoin;
    }

  }
  catch (error) {
    console.log(error);
  }
}