import React, { useState, useEffect } from "react";
import axios from "axios";

const flightsData = () => {
  const [flights, setFlights] = useState([]);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios
      .get("/public/data.json")
      .then((response) => {
        setFlights(response.data.flights);
        setSeats(response.data.flights.seats);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {flights.map((el) => {
        return (
        <p>{el.from}</p>, 
        <p>{el.to}</p>);
      })}
      {seats.map((el) => {
        return (
        <p>{el.number}</p>,
        <p>{el.available}</p>);
      })}
    </div>
  );
};

export default flightsData;
