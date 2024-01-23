import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Listview from "../Listview/Listview.jsx";
import GridView from "../GridView/GridView.jsx";
import "./Style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function TabComponents({ data }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="Grid" sx={style} />
          <Tab label="List" value="List" sx={style} />
        </TabList>
        <TabPanel className="grid-flex" value="Grid">
          {data.map((coin, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.25 + ((i + 5) % 5) * 0.1,
            }}>
            <GridView coin={coin} delay={i} key={i} />
            </motion.div>
          ))}
        </TabPanel>
        <TabPanel value="List" className="list-flex">
          {data.map((coin, i) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 0.25 + ((i + 8) % 8) * 0.1,
              }}
              key={i}
            >
              <Listview coin={coin} />
            </motion.div>
          ))}
        </TabPanel>
      </TabContext>
    </div>
  );
}
