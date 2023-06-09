import React from 'react';

const FlightList = ({ flights, seats}) => {
    return (
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Duration: {flight.duration}</p>
            <p>Price: {flight.price}</p>
          </li>
        ))}
      </ul>,
      <ul>
      {seats.map((seat) => (
        <li key={seats.id}>
          <p>Number: {seats.number}</p>
          <p>Available: {seats.available}</p>
        </li>
      ))}
    </ul>
    );
  };

export default FlightList;