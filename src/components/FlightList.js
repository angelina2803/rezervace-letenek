import React, { useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GlobalContext } from "./context/GlobalContext";

const FlightList = () => {
  const { filteredFlights, setSelectedFlight } = useContext(GlobalContext);
  const [selection, setSelection] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "from", headerName: "From", width: 80 },
    { field: "to", headerName: "To", width: 130 },
    { field: "departure", headerName: "Departure", width: 180 },
    { field: "arrival", headerName: " Arrival", width: 180 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
  ];
  const handleRowSelect = (newSelectionId) => {
    setSelectedFlight(
      filteredFlights.find((flight) => flight.id === newSelectionId[0])
    );
    setSelection(newSelectionId);
  };
  return (
    <div>
      <div
        style={{
          height: 400,
          width: "100%",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <DataGrid
          className="flightList"
          rows={filteredFlights}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          rowSelectionModel={selection}
          onRowSelectionModelChange={handleRowSelect}
        />
      </div>
    </div>
  );
};

export default FlightList;
