import React,{useEffect,useState} from "react";
import "./resultpage.css"
import logo from "./frontpagelogo.png";
import restart from "./restart.png"

function App ({score, setstart}){
    return(
        <div className="result">
            <div className="frontpage">
                <img id="logo" src={logo} alt="logo" />
                <div id="result">R E S U L T S</div>
                <div id="finalresult">{score}/5 ({Math.round((score / 5) * 100)}%) </div>
                <img onClick={() => window.location.reload()} id="restart" src={restart} alt="restart" />
            </div>
        </div>
    )
}

export default App;