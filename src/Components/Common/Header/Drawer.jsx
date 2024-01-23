import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoudedIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import themeContext from "../../../Contaxt/themeContext";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const { theme, setTheme, toggleTheme } = React.useContext(themeContext);
  
  const handleDrawerOpen = () => {
    setOpen(true);
    document.body.classList.add('drawer-open');
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
    document.body.classList.remove('drawer-open');
  };
  return (
    <div>
      <div className="menu-button">
        <IconButton onClick={handleDrawerOpen}>
          <MenuRoudedIcon style={{ color: "var(--white)" }} className="Link" />
        </IconButton>
      </div>

      <Drawer anchor={"right"} open={open} onClose={handleDrawerClose}   disableScrollLock={true} >
      <div className="menu-button">
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon style={{ color: "var(--black)",borderRadius:"3rem", fontSize:"3rem",background:"var(--white)" }}  className="Link" />
        </IconButton>
      </div>
        <div className="drawer-links">
          <Link to="/">
            <p className="drawer-Link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="drawer-Link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="drawer-Link">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <p className="drawer-Link">
              Dashboard
            </p>
          </Link>
          
          <Switch
            defaultChecked
            value={theme == "black" ? false : true}
            onClick={toggleTheme}
          />
        </div>
      </Drawer>
    </div>
  );
}
