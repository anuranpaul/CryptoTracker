import React, { useContext, useEffect, useState } from "react";
import BacktoTop from "../Components/Common/Dashboard/BacktoTop/BacktoTop";
import Header from "../Components/Common/Header/Header";
import { getData } from "../Functions/getData";
import TabComponents from "../Components/Common/Dashboard/TabComponents";
import Loader from "../Components/Common/Dashboard/Loader/Loader";
import themeContext from "../Contaxt/themeContext";
import watchlist from "../assets/wishlist.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Components/Common/Footer/Footer";
const WatchList = () => {
  const { idArr, setIdArr } = useContext(themeContext);
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(idArr);
  useEffect(() => {
    get100Coin();
  }, []);
  const get100Coin = async () => {
    try {
      setIsLoading(true);
      const myCoin = await getData();
      console.log(myCoin);
      if (myCoin) {
        setCoinData(myCoin);
        setIsLoading(false);
      }
      console.log(coinData, idArr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   get100Coin();
  //   if (coinData.length > 0) setIsLoading(false);
  // }, [idArr]);
  // useEffect(() => {
  //   if (coinData.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, [coinData]);
  console.log(idArr);
  const filterList =
    coinData.length !== 0 && coinData?.filter((val) => idArr.includes(val.id));
  return (
    <div>
      <Header />
      <BacktoTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="wishlist-page">
          {filterList.length > 0 ? (
            <div>
              <TabComponents data={filterList} />
            </div>
          ) : (
            <div className="wishlist-container">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                  type: "smooth",
                  repeatType: "mirror",
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="wishlist-img"
              >
                <img width={200} src={watchlist} />
              </motion.div>
              <div className="wishlist-text">
                <h1 className="">Your watchlist is empty!</h1>
                <p>Explore more and bookmark</p>
              </div>
              <Link to="/dashboard">
                {" "}
                <div className="dashbord-btn">GO TO DASHBOARD</div>
              </Link>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default WatchList;
