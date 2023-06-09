import React, { useState, useEffect } from "react";
import "./styles/App.css";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import FlightList from "./components/FlightList";

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

  const getSearch = async ({data}) => {
    const { data } = await axios.get("data.json");
    const filteredFlights = data.filter(
      (flight) =>
        flight.from === from &&
        flight.to === to &&
        flight.departure === departure &&
        flight.arrival === arrival &&
        flight.duration === duration,
    );
  };
  getSearch()

  return (
    <div className="App">
      <SearchForm search={getSearch} />
      <FlightList flights={flights} />
    </div>
  );
}

export default App;
