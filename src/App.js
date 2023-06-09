import React, {useState, useEffect} from 'react';
import './styles/App.css';
import SearchForm from './components/SearchForm';
import axios from "axios";
import FlightList from './components/FlightList';


function App() {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log(response.data)
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  
  return (
    <div className="App">
    <SearchForm/> 
    <FlightList flights={flights}/>
    </div>
  );
}

export default App;
