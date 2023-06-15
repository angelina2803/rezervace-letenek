import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const [selectedFlight, setSelectedFlight] = useState(null);

  // Filters
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        flights,
        setFlights,
        filteredFlights,
        setFilteredFlights,
        selectedFlight,
        setSelectedFlight,
        from,
        setFrom,
        to,
        setTo,
        departure,
        setDeparture,
        arrival,
        setArrival,
        duration,
        setDuration,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
