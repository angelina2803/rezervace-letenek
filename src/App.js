import React, { useState, useEffect } from "react";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import FlightList from "./components/FlightList";
import ReservationForm from "./components/ReservationForm";

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
      
      const filteredFlights = data.filter(
        (flight) =>
          flight.from === from &&
          flight.to === to &&
          flight.departure === departure &&
          flight.arrival === arrival &&
          flight.duration === duration

      );

      setFlights(from, to, departure, arrival, duration )
  
      return filteredFlights;
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
