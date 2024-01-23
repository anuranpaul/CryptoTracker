import React, { useContext } from "react";
import LandingPage from "../Components/LandingPage/LandingPage";
import Header from "../Components/Common/Header/Header";
import themeContext from "../Contaxt/themeContext";
import Footer from "../Components/Common/Footer/Footer";

const Home = () => {
  const {theme,setTheme,toggleTheme} = useContext(themeContext);
  
  return (
    <div data-theme={theme} >
      <Header />
      <LandingPage />
      <Footer/>
    </div>
  );
};

export default Home;
