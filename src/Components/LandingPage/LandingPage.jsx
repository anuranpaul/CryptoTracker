import React, { useContext } from "react";
import Button from "../Common/Button/Button";
import phone from "../../assets/phone 1.png";
import gradient from "../../assets/gradient 1.png";
import { motion } from "framer-motion";
import "./style.css";
import { Link } from "react-router-dom";
import themeContext from "../../Contaxt/themeContext";
import { RWebShare } from "react-web-share";
const LandingPage = () => {
  const { theme, setTheme, toggleTheme } = useContext(themeContext);
  return (
    <div className="landing-component">
      <div className="landing-text-side">
        <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="track-crypto">Track Crypto</span>
          <span className="Real-time">Real Time.</span>
        </motion.h1>

        <motion.p
          className="landing-para"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track crypto through a public API in real time. Check out the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="flex-btn"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/dashboard">
            <p className="Link">
              <Button text="Dashboard" />
            </p>
          </Link>
          <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url: "https://trackx-y.vercel.app/",
              title: "TrackX - A Cryptocurrency tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <p className="Link">
              <Button text="Share" outline={true} />
            </p>
          </RWebShare>
        </motion.div>
      </div>
      <div className="mobile-side">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
          className="phone-img"
          src={phone}
        />
        <img className="gradient-img" src={gradient} />
      </div>
    </div>
  );
};

export default LandingPage;
