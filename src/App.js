import React, { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#fffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomHex);
  }

  return (
    <div className="App">
      <h1>{hex}</h1>
      <button>Click for New Background</button>
    </div>
  );
}

export default App;
