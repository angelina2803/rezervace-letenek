import React, { useState, useEffect } from "react";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import FlightList from "./components/FlightList";
import ReservationForm from "./components/ReservationForm";
import dayjs from "dayjs";

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log(response.data);
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getSearch = async ({ from, to, departure, arrival, duration }) => {
    try {
      const { data } = await axios.get("data.json");

      setFlights(data.filter(
        (flight) =>
          flight.from === from.label &&
          flight.to === to.label &&
          dayjs(flight.departure).isSame(dayjs(departure), "day") &&
          dayjs(flight.arrival).isSame(dayjs(arrival), "day") &&
          flight.duration === `${duration}h`
      ));
      
    } catch (error) {
      console.error("Chyba při získávání dat:", error);
      return [];
    }

  };
  
  return (
    <div className="App">
      <SearchForm search={getSearch}/>
      <FlightList flights={flights} />
      <ReservationForm/>

    </div>
  );
}

export default App;
