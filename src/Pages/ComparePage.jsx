import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import BacktoTop from "../Components/Common/Dashboard/BacktoTop/BacktoTop";
import SelectCoin from "../Components/Compare/SelectCoin/SelectCoin";
import BasicSelect from "../Components/Coin/selectDropdown/selectDropdown";
import { getCoinData } from "../Functions/getCoinData";
import { getObject } from "../Functions/getObject";
import { getCoinPrices } from "../Functions/getCoinPrices";
import Loader from "../Components/Common/Dashboard/Loader/Loader";
import CoinDescription from "../Components/Coin/CoinDescription/CoinDescription";
import Listview from "../Components/Common/Dashboard/Listview/Listview";
import { saveChartData } from "../Functions/saveChartData";
import LineChart from "../Components/Coin/LineChart/LineChart";
import ToggleButtons from "../Components/Coin/ToggleButton/ToggleButton";
import { motion } from "framer-motion";
import { convertNumber } from "../Functions/convertNumber";
import Footer from "../Components/Common/Footer/Footer";
import { toast } from "react-toastify";
const ComparePage = () => {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [toggle, setToggle] = useState("prices");

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        position: "left",
        display: true,
        ticks: {
          callback: function (value, index, ticks) {
            if (toggle == "prices" || toggle == "market_caps")
              return "$" + convertNumber(value.toLocaleString());
            else return convertNumber(value.toLocaleString());
          },
        },
      },
      crypto2: {
        type: "linear",
        position: "right",
        display: true,
        ticks: {
          callback: function (value, index, ticks) {
            if (toggle == "prices" || toggle == "market_caps")
              return "$" + convertNumber(value.toLocaleString());
            else return convertNumber(value.toLocaleString());
          },
        },
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setIsLoading(true);
    try {
      const data1 = await getCoinData(coin1);
      const data2 = await getCoinData(coin2);
      console.log(data1, data2);
      if (data1) {
        getObject(setCrypto1Data, data1);
      }
      if (data2) {
        getObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(coin1, days, toggle);
        const prices2 = await getCoinPrices(coin2, days, toggle);
        if (prices1.length > 0 && prices2.length > 0) {
          await saveChartData(setChartData, prices1, prices2);
          setIsLoading(false);
        }
      }
      if (!data1 || !data2) {
        toast.error(
          "You have reached the limit of free version please try again after sometime"
        );
      }
    } catch (error) {
      toast.error(
        "You have reached the limit of free version please try again after sometime"
      );
      console.log(error);   
    }
  }

  const handleChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    try {
      const prices1 = await getCoinPrices(coin1, event.target.value, toggle);
      const prices2 = await getCoinPrices(coin2, event.target.value, toggle);
      if (prices1.length > 0 && prices2.length > 0) {
        await saveChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(
        "You have reached the limit of free version please try again after sometime"
      );
      console.log(error);
    }
  };

  const handleCoinChange = async (event, isCoin2) => {
    console.log(event.target.value);
    try {
      setIsLoading(true);
      if (isCoin2) {
        setCoin2(event.target.value);
        const data = await getCoinData(event.target.value);
        if (data) getObject(setCrypto2Data, data);
      } else {
        setCoin1(event.target.value);
        const data = await getCoinData(event.target.value);
        if (data) getObject(setCrypto1Data, data);
      }
      const prices1 = await getCoinPrices(coin1, days, toggle);
      const prices2 = await getCoinPrices(coin2, days, toggle);
      if (prices1.length > 0 && prices2.length > 0) {
        await saveChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(
        "You have reached the limit of free version please try again after sometime"
      );
      console.log(error);
    }
  };
  const handleToggle = async (event, newToggle) => {
    setIsLoading(true);
    setToggle(newToggle);
    console.log(newToggle);
    try {
      const prices1 = await getCoinPrices(coin1, days, newToggle);
      const prices2 = await getCoinPrices(coin2, days, newToggle);
      if (prices1.length > 0 && prices2.length > 0) {
        await saveChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <Header />
      <BacktoTop />
      {!isLoading ? (
        <div className="coin-container upper-margin">
          <div className="coinselection">
            <SelectCoin
              coin1={coin1}
              coin2={coin2}
              handleCoinChange={handleCoinChange}
            />
            <BasicSelect days={days} handleChange={handleChange} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grey-wrapper"
          >
            <Listview coin={crypto1Data} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grey-wrapper"
          >
            <Listview coin={crypto2Data} />
          </motion.div>
          <ToggleButtons
            toggle={toggle}
            setToggle={setToggle}
            handleToggle={handleToggle}
          />
          <LineChart
            chartData={chartData}
            multiAxis={true}
            toggle={toggle}
            options={options}
          />
          <div className="upper-margin">
            <CoinDescription name={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinDescription name={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </div>
  );
};

export default ComparePage;
