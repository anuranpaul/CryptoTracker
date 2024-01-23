import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import "./Style.css";

export default function PaginationControlled({page, handleChange}) {
  console.log(page);
  return (
    <div className="pagination-container">
     
      <Pagination
        count={10}
        page={page}
        onChange={(event,value) =>{
            handleChange(event,value)
        }}
        sx={{
          color: "#fff",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },

          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid #333",
          },
        }}
      />
    </div>
  );
}
