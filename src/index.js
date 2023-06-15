import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from "./context/GlobalContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalProvider>
    <App />
  </GlobalProvider>
);

reportWebVitals();
