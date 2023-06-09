import React from 'react';
import './styles/App.css';
import SearchForm from './components/SearchForm';
import flightsData from './services/flightsData';


function App() {
  
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
