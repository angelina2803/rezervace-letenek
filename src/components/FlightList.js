import React from 'react';

const FlightList = ({ flights, seats}) => {
    return (
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <p>From: {flight.from}</p>
            <p>To: {flight.to}</p>
            <p>Date: {flight.departure}</p>
            <p>Date: {flight.arrival}</p>
            <p>Date: {flight.duration}</p>
            <p>Date: {flight.price}</p>
          </li>
        ))}
      </ul>,
      <ul>
      {seats.map((seat) => (
        <li key={seats.id}>
          <p>From: {seats.number}</p>
          <p>To: {seats.available}</p>
        </li>
      ))}
    </ul>
    );
  };

export default FlightList;