import React, { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#fffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomhex);
  }

  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHex} >Click for New Background</button>
      <button onClick={()=> navigator.clipboard.writeText(hex)}>Copy the Hex Value</button>
    
    </div>
  ); 
}

export default App;
