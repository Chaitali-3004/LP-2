//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button class="color1"
        type="button"
        onClick={() => setColor("Blue")}
      >Blue</button>
      <button class="color2"
        type="button"
        onClick={() => setColor("Red")}
      >Red</button>
      <button class="color3"
        type="button"
        onClick={() => setColor("Pink")}
      >Pink</button>
      <button class="color4"
        type="button"
        onClick={() => setColor("Green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
