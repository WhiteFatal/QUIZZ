import React from "react"
import QuizzQuestions from "./QuizzQuestions.js"

export default function MainQuizz(props) {
    
    function renderQuestions () {                 
        return props.data.map((questionInstance, indQ) => {          
            return (                    
                <QuizzQuestions 
                    id={`Q${indQ}`}
                    question={questionInstance.question.replace(/&#039;/g, "\'").replace(/&quot;/g, '\"').replace(/&ldquo;/g, "\“").replace(/&rsquo;/g, "\’").replace(/&rdquo;/g, "\”").replace(/&hellip;/g, "\…")}
                    answers={questionInstance.answersData}
                    key={`Q${indQ}`}
                    selectAnswer={selectAnswer}
                    score={props.score}
                />  
            )
        })    
    }       
    
    function selectAnswer(id) {
        console.log("button id: " + id)
        props.selectButton(id)    
    }
    
    return (
        <main>
            <div className="blob--yellow"></div>
            <div className="blob--cyan"></div>
            {renderQuestions()}
            <div className="answers--check">
                {props.score.displayScore && <p className="check--score"> You Scorred {props.score.correctAnswers}/{props.score.qustionsNumber} correct answers</p>}
                
                <button className="submit-button" onClick={props.checkAnswers}>
                {props.score.displayScore ? "Play Again" : "Check Answers"}
                </button>
            </div>
        </main>
    )
}