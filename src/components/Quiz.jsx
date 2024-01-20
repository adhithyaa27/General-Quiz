import React,{useEffect, useState} from "react";
import logo2 from "./questionpagelogo.png";
import logo3 from "./questionpagelogo2.png";
import question from "../question.js";
import ResultPage from "./Resultpage.jsx"

import './quiz.css'

function App(){
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=>{
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'rgb(225, 192, 192)'

    },[isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // console.log(isDarkMode)
    }

    const[ishighlight, setIshighlight] = useState(false);
    useEffect(() =>{
        if(!quizOver) document.getElementById("questions").style.color = ishighlight ? "black" : "white" 
    })
    const togglehighlight = () =>{
        setIshighlight(!ishighlight);
    }
    
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const questionDatas = question[currentQuestion]
    const [quizOver, setQuizOver] = useState(false)

    const optionsclick = (selectedOptionIndex) => {
        const selectedOption = questionDatas.options[selectedOptionIndex];
    
        if (currentQuestion < question.length - 1) {
            setcurrentQuestion(currentQuestion + 1);
        }
    
        if (selectedOption.isCorrect) {
            setScore(score + 1);
        }
    
        // Check if it's the last question
        if (currentQuestion === question.length - 1) {
            setQuizOver(true);
        }
    
        console.log(score);
    };
    
    const [score, setScore] = useState(0);


    return (
        <>
            {quizOver ? (<ResultPage  score={score}/>) : (
                <div className="quizpage">

                <img id="logo2"src={isDarkMode ? logo3 : logo2 } alt="name"/>
        
                <div id="theme" onClick={toggleDarkMode}>{isDarkMode ? "Dark" : "Light"}</div>
        
                <div id="highlight" onClick={togglehighlight}>{ishighlight ? "Unmark" : "Mark"}</div>
        
                <div id="quizbox"> 
        
                    <div id="quizno">{currentQuestion + 1}/5</div>
                    <div id="questions">{questionDatas.text}</div>
                    <div id="a" onClick={() => optionsclick(0)}>{questionDatas.options[0].text}</div>
                    <div id="b" onClick={() => optionsclick(1)}>{questionDatas.options[1].text}</div>
                    <div id="c" onClick={() => optionsclick(2)}>{questionDatas.options[2].text}</div>
                    <div id="d" onClick={() => optionsclick(3)}>{questionDatas.options[3].text}</div>
        
                </div>
               
                </div>
            ) }
        </>
    )
}

export default App;