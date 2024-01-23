import React, { useContext, useEffect, useState } from "react";
import "./GridStyle.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Button from "../../Button/Button";
import { addWishList } from "../../../../Functions/addWhishList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import themeContext from "../../../../Contaxt/themeContext";
import { Tooltip } from "@mui/material";
const GridView = ({ coin,delay}) => {
  const [isPositive, setIspositive] = useState(true);
  const {idArr,setIdArr} =useContext(themeContext);
  useEffect(() => {
    if (coin.market_cap_change_percentage_24h < 0) {
      setIspositive(false);
    }
  }, []);
  const handleStar = (id) => {
    console.log("clicked");
    addWishList(id,setIdArr);
  };
  return (
    <div 
  
    className={`gridbox ${isPositive ? "incBorder" : "decBorder"}`}
  
    // initial={{ opacity: 0, x: -30 }}
    // whileInView={{ opacity: 1, x: 0 }}
    // viewport={{ once: true }}
    // transition={{
    //   type: "spring",
    //   duration: 0.5,
    //     delay: 0.25 +((delay + 5) % 8) * 0.1 }}
    >
      <div className="card-head">
        <div className="heading">
          <img src={coin.image} />
          <div className="coinname">
            <h1>{coin.symbol}</h1>
            <p>{coin.name}</p>
          </div>
        </div>
        <Tooltip title="Bookmark" placement="bottom-end">
        <span
          className="star-icon"
          style={{
            border: !isPositive
              ? "0.1rem solid var(--red)"
              : "0.1rem solid var(--green)",
          }}
          onClick={() => handleStar(coin.id)}
        >
          <StarOutlineIcon
            style={{ color: !isPositive ? "var(--red)" : "var(--green)" }}
          />
        </span>
        </Tooltip>
      </div>

      {!isPositive ? (
        <div className="change_percent">
          <div className="coin-decrement">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="down-icon">
            <TrendingDownIcon />
          </div>
        </div>
      ) : (
        <div className="change_percent">
          <div className="coin-increment">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="up-icon">
            <MovingIcon />
          </div>
        </div>
      )}
      <p
        className="currentPrice"
        style={{ color: !isPositive ? "var(--red)" : "var(--green)" }}
      >{`$${coin.current_price}`}</p>

      <p className="card-text">{`Total Volume : ${coin.total_volume}`}</p>
      <p className="card-text">{`Market Cap : ${coin.market_cap}`}</p>
      <Link to={`/coin/${coin.id}`}>
        <p
          className="more-details"
          style={{ color: !isPositive ? "var(--red)" : "var(--green)" }}
        >
          More Details...
        </p>
      </Link>
    </div >
  );
};

export default GridView;
