import React, {
  useRef,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("black");
  const idList = JSON.parse(localStorage.getItem("arr")) || [];
  const [idArr, setIdArr] = useState(idList);
  const bodyRef = useRef(document.body);
  useEffect(() => {
    // Update body element with current theme
    bodyRef.current.setAttribute("data-theme", theme);
  }, [theme]);
  function toggleTheme() {
    if (theme === "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
    //toast.success("Theme Changed!");
  }
  return (
    <themeContext.Provider
      value={{ theme, setTheme, toggleTheme, idArr, setIdArr }}
    >
      {children}
    </themeContext.Provider>
  );
};
export default themeContext;
