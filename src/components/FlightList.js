import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "from", headerName: "From", width: 80 },
  { field: "to", headerName: "To", width: 130 },
  { field: "departure", headerName: "Departure", width: 130 },
  { field: "duration", headerName: "Duration", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
];

const FlightList = ({ flights = [] }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
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
      <Button variant="outlined" className="myBtn"> Vybrat</Button>
    </div>
  );
};

export default FlightList;
