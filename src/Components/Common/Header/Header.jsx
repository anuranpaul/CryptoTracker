import { Switch } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import themeContext from "../../../Contaxt/themeContext";
import { motion } from "framer-motion";
const Header = () => {

  const { theme, setTheme, toggleTheme } = useContext(themeContext);
  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector("nav");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(theme);
  return (
    <nav className="header">
      <Link to="/">
        <motion.h1 
         initial={{ opacity: 0, x: '-50%' }}
         animate={{ opacity: 1, x: '0%' }}
         transition={{ duration: 1, delay: 0.3 }}
        className="logo" style={{ color: "var(--blue)" }}>
        TrackX
        </motion.h1>
      </Link>
      <div className="links">
        <Switch
       defaultChecked
         value={theme=="black" ? false : true}
        onClick={toggleTheme}  />
        <Link to="/">
          <p className="Link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="Link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="Link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <p className="Link">
            <Button text="Dashboard" />
          </p>
        </Link>
      </div>
      <div className="drawer-menu">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};

export default Header;
