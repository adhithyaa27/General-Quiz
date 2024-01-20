import React, { useEffect, useState } from "react";
import "../App.css";
import logo from "./frontpagelogo.png";
import startImg from "../assets/start.png";
import Quiz from "./Quiz.jsx"


function App() {
  const[start, setstart] = useState(false)
  const startBtn = () => {
    setstart(true)
  }
  return (
    <>
      {start ? (<Quiz setstart={setstart}/>) : (
        <div className="frontpage">
          <img id="logo" src={logo} alt="logo" />
          <img id="start" src={startImg} onClick={startBtn} alt="start" />
        </div>
      ) }
    </>

   
  );
}

export default App;