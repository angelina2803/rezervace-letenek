import React, {useState, useEffect} from 'react';
import './styles/App.css';
import SearchForm from './components/SearchForm';
import axios from "axios";


function App() {

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
  
  const createPost = (newPost) =>{
    setFlights([...flights, newPost])
}
  
  return (
    <div className="App">
    <SearchForm create={createPost}/> 
    {/* <FlightList flight={flights} seats={seats}/> */}
    </div>
  );
}

export default App;
