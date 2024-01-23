import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css";

export default function ToggleButtons({toggle,handleToggle}) {
  return (
    <div className="toogle-graph">
      <ToggleButtonGroup
        value={toggle}
        exclusive
        onChange={handleToggle}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue) !important",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices">PRICE</ToggleButton>
        <ToggleButton value="market_caps">MKT CAP</ToggleButton>
        <ToggleButton value="total_volumes">VOLUME</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
