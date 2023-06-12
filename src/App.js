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

  // const getSearch = async ({ from, to, departure, arrival, duration }) => {

  //     const { data } = await axios.get("data.json");
  //     const filteredFlights = data.filter(
  //       (flight) =>
  //         flight.from === from &&
  //         flight.to === to &&
  //         flight.departure === departure &&
  //         flight.arrival === arrival &&
  //         flight.duration === duration
  //     );
       
  //     for (let i = 0; i < data.length; i++) {
  //       const flight = data[i];
  //       if (filteredFlights === inputValue) {
  //         console.log(flight);
  //       }
  //     }
  //   }
  
  // getSearch();

  return (
    <div className="App">
      <SearchForm />
      <FlightList flights={flights} />
      <ReservationForm/>

    </div>
  );
}

export default App;
