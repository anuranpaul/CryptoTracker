import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import TabComponents from "../Components/Common/Dashboard/TabComponents";
import SearchBar from "../Components/Common/Dashboard/SearchBar/SearchBar";
import axios from "axios";
import PaginationControlled from "../Components/Common/Dashboard/PaginationBar/PaginationBar";
import { paginationSelect } from "../Functions/paginationSelect";
import Loader from "../Components/Common/Dashboard/Loader/Loader";
import BacktoTop from "../Components/Common/Dashboard/BacktoTop/BacktoTop";
import { getData } from "../Functions/getData";
import Footer from "../Components/Common/Footer/Footer";
const Dashboard = ({ list }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const onchangeText = (value) => {
    setSearchText(value);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    get100cCoin();
  }, []);
  const get100cCoin = async () => {
    const myCoin = await getData();
    if (myCoin) {
      setData(myCoin);
      setIsLoading(false);
    }
  };
  const filteredData =
    data.length > 0 &&
    data?.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchText.toLowerCase())
    );
  //console.log(filteredData);
  //console.log(page);
  const coinList = paginationSelect(page, data);
  return (
    <div>
      <Header />
      <BacktoTop />
      {isLoading == true ? (
        <Loader />
      ) : (
        <>
          <SearchBar searchText={searchText} onchangeText={onchangeText} />
          <TabComponents data={searchText ? filteredData : coinList} />
          {coinList.length > 0 && !searchText && (
            <PaginationControlled handleChange={handleChange} page={page} />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
