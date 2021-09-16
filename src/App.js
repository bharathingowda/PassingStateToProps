import "./styles.css";
import React, { useState } from "react";
import NavBar from "./components/navbar";

export default function App() {
  const [name, setName] = useState(true);
  const handlename = () => {
    setName(!name);
  };
  return (
    <div className="App">
      <h1>Hello Guys</h1>
      <NavBar name={name} />
      <button onClick={handlename}> click for Last Name</button>
    </div>
  );
}
