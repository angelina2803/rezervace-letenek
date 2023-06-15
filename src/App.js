import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import FlightList from "./components/FlightList";
import ReservationForm from "./components/ReservationForm";
import dayjs from "dayjs";

function App() {
  const { setFlights, setFilteredFlights } = useContext(GlobalContext);

//data from API
  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        const flights = response.data.map((flight) => {
          return {
            ...flight,
            departure: dayjs(flight.departure).format("MM/DD/YYYY"),
            arrival: dayjs(flight.arrival).format("MM/DD/YYYY"),
          };
        });
        setFlights(flights);
        setFilteredFlights(flights);
      })
      .catch((error) => {
        console.error("Chyba při získávání dat:", error);
        console.error(error);
      });
  }, []);
  
  return (
    <div className="App">
      <SearchForm/>
      <FlightList/>
      <ReservationForm/>

    </div>
  );
}

export default App;
