import React, { useContext } from "react";
import "./Listview.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../../Functions/convertNumber";
import themeContext from "../../../../Contaxt/themeContext";
import { addWishList } from "../../../../Functions/addWhishList";
import { Link } from "react-router-dom";
const Listview = ({ coin }) => {
  const coinChange = coin.price_change_percentage_24h;
  const { idArr, setIdArr } = useContext(themeContext);
  const handleStar = (id) => {
    addWishList(id, setIdArr);
  };

  return (
    <tr className="table-flex">
      <td>
        <Link to={`/coin/${coin.id}`}>
          <Tooltip title="logo" placement="bottom-start">
            <img className="coin-img" src={coin.image} />
          </Tooltip>
        </Link>
      </td>
      <td className="coinname">
        <Tooltip title="Symbol" placement="bottom-start">
          <h1>{coin.symbol}</h1>
        </Tooltip>
        <Tooltip title="Name" placement="bottom-start">
          <p>{coin.name}</p>
        </Tooltip>
      </td>

      {coinChange < 0 ? (
        <td className="change_percent">
          <Tooltip title="Price-Change" placement="bottom">
            <div className="coin-decrement">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </Tooltip>
          <Tooltip title="Price-Change" placement="bottom">
            <div className="down-icon  price-full">
              <TrendingDownIcon />
            </div>
          </Tooltip>
        </td>
      ) : (
        <td className="center-align change_percent">
          <Tooltip title="Price-Change" placement="bottom">
            <div className="coin-increment">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </Tooltip>
          <Tooltip title="Price-Change" placement="bottom">
            <div className="up-icon  price-full">
              <MovingIcon />
            </div>
          </Tooltip>
        </td>
      )}

      <td className="center-align">
        <Tooltip title="Current-Price" placement="bottom">
          <p
            className="currentPrice"
            style={{ color: coinChange < 0 ? "var(--red)" : "var(--green)" }}
          >{`$${coin.current_price}`}</p>
        </Tooltip>
      </td>

      <td className="card-text right-align price-full">
        <Tooltip title="Total-vlume" placement="bottom">
          {coin.total_volume.toLocaleString()}
        </Tooltip>
      </td>

      <td className="card-text right-align price-full">
        <Tooltip title="Market-cap" placement="bottom-end">
          {coin.market_cap.toLocaleString()}
        </Tooltip>
        <Tooltip title="Bookmark" placement="bottom-end">
          <span
            className="star-icon-list"
            style={{
              border:
                coinChange < 0
                  ? "0.1rem solid var(--red)"
                  : "0.1rem solid var(--green)",
            }}
            onClick={() => handleStar(coin.id)}
          >
            <StarOutlineIcon
              style={{ color: coinChange < 0 ? "var(--red)" : "var(--green)" }}
            />
          </span>
        </Tooltip>
      </td>

      <td className="card-text price-convert right-align ">
        <Tooltip title="Market-cap" placement="bottom-end">
          {convertNumber(coin.market_cap)}
        </Tooltip>
        <Tooltip title="Bookmark" placement="bottom-end">
          <span
            className="star-icon-list"
            style={{
              border:
                coinChange < 0
                  ? "0.1rem solid var(--red)"
                  : "0.1rem solid var(--green)",
            }}
            onClick={() => handleStar(coin.id)}
          >
            <StarOutlineIcon
              style={{ color: coinChange < 0 ? "var(--red)" : "var(--green)" }}
            />
          </span>
        </Tooltip>
      </td>
    </tr>
  );
};

export default Listview;
