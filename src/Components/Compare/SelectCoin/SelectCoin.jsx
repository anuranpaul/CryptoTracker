import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getData } from "../../../Functions/getData";
import "./style.css";
export default function SelectCoin({ coin1, coin2, handleCoinChange }) {
  const [allCoin, setAllCoin] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    get100cCoin();
  }, []);
  const get100cCoin = async () => {
    try {
      const myCoin = await getData();
      console.log(myCoin);
      if (myCoin) {
        setAllCoin(myCoin);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  console.log(allCoin);

  return (
    <div className="selectBox" sx={{ minWidth: 120 }}>
      <div className="coin-selection-flex">
        <p>Crypto 1</p>
        <Select
          sx={styles}
          value={coin1}
          onChange={(e) => handleCoinChange(e, false)}
        >
          {allCoin
            .filter((val) => val.id !== coin2)
            ?.map((val, i) => {
              return (
                <MenuItem key={i} value={val.id}>
                  {val.name}
                </MenuItem>
              );
            })}
        </Select>
      </div>
      <div className="coin-selection-flex">
        <p>Crypto 2</p>
        <Select
          sx={styles}
          value={coin2}
          onChange={(e) => handleCoinChange(e, true)}
        >
          {allCoin
            .filter((val) => val.id !== coin1)
            ?.map((val, i) => {
              return (
                <MenuItem key={i} value={val.id}>
                  {val.name}
                </MenuItem>
              );
            })}
        </Select>
      </div>
    </div>
  );
}
