import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getObject } from "../Functions/getObject";

import Listview from "../Components/Common/Dashboard/Listview/Listview";
import Header from "../Components/Common/Header/Header";
import CoinDescription from "../Components/Coin/CoinDescription/CoinDescription";
import Loader from "../Components/Common/Dashboard/Loader/Loader";
import BacktoTop from "../Components/Common/Dashboard/BacktoTop/BacktoTop";
import { getCoinData } from "../Functions/getCoinData";
import axios from "axios";
import { getCoinPrices } from "../Functions/getCoinPrices";
import { Line } from "react-chartjs-2";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { convertDate } from "../Functions/convertDate";
import BasicSelect from "../Components/Coin/selectDropdown/selectDropdown";
import { saveChartData } from "../Functions/saveChartData";
import ToggleButtons from "../Components/Coin/ToggleButton/ToggleButton";
import { convertNumber } from "../Functions/convertNumber";
import { motion } from "framer-motion";
import Footer from "../Components/Common/Footer/Footer";
const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [toggle, setToggle] = useState("prices");

  console.log(id);
  useEffect(() => {
    getCoinDatas();
  }, [id]);

  async function getCoinDatas() {
    const fetchCoinData = await getCoinData(id);

    console.log(fetchCoinData);
    if (fetchCoinData) {
      getObject(setCoinData, fetchCoinData);
      // console.log(coinData);

      const toggles = await getCoinPrices(id, days, toggle);
      //  console.log(prices);
      if (toggles?.length > 0) {
        saveChartData(setChartData, toggles);
        setIsLoading(false);
      }
    }
  }

  const options = {
    plugins: {
      legend: {
        display: false,
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
    },
  };

  const handleChange = async (event) => {
    setIsLoading(true);
    const toggleData = await getCoinPrices(id, event.target.value, toggle);
    console.log(toggleData);
    if (toggleData?.length > 0) {
      saveChartData(setChartData, toggleData);
      setIsLoading(false);
    }
    setDays(event.target.value);
  };
  const handleToggle = async (e, newToggle) => {
    setIsLoading(true);
    setToggle(newToggle);
    console.log(newToggle);

    const toggleData = await getCoinPrices(id, days, newToggle);
    console.log(toggleData);
    if (toggleData?.length > 0) {
      saveChartData(setChartData, toggleData);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Header />
      <BacktoTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="coin-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grey-wrapper"
          >
            {coinData.length !== 0 && <Listview coin={coinData} />}
          </motion.div>

          <div className="graph-container">
            <BasicSelect days={days} handleChange={handleChange} />
            <ToggleButtons
              toggle={toggle}
              setToggle={setToggle}
              handleToggle={handleToggle}
            />
            <LineChart
              chartData={chartData}
              options={options}
              toggle={toggle}
            />
          </div>

          {coinData.length !== 0 ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <CoinDescription name={coinData.name} desc={coinData.desc} />
            </motion.div>
          ) : (
            ""
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Coin;

{
  /* <motion.div 
initial={{ opacity: 0, y:100 }}
animate={{ opacity: 1, y:20 }}
transition={{ duration: 1 }}
> */
}
