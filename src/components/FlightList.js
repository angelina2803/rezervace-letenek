import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import RezervationForm from "./RezervationForm";

const FlightList = ({ flights = [] }) => {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "from", headerName: "From", width: 80 },
        { field: "to", headerName: "To", width: 130 },
        { field: "departure", headerName: "Departure", width: 180 },
        { field: "duration", headerName: "Duration", width: 130 },
        { field: "price", headerName: "Price", width: 130 },
      ];
      
  return (
    <div>
    <div style={{ height: 400, width: "100%", marginTop: '30px', marginBottom:'30px'}}>
      <DataGrid
        className="flightList"
        rows={flights}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </div>
    </div>
  );
};

export default FlightList;
