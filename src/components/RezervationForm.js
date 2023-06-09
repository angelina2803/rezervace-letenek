import React, { useState } from "react";

const RezervationForm = () => {
  const [seats, setSeats] = useState([]);
  const [passengerName, setPassengerName] = useState("");

  return (
    <form>
      <p>From: {flight.from}</p> 
      <p>To: {flight.to}</p>
      <p>Departure: {flight.departure}</p>
      <p>Arrival: {flight.arrival}</p>
   {/* данные с апи */}
      <input
        type="text"
        placeholder="Passenger Name"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
      />
      {/* další pole pro údaje o cestujícím */}
      <button type="submit">Reserve</button>
    </form>
  );
};

export default RezervationForm;
