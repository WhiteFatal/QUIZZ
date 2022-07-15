import React from "react"


export default function StartScreen(props){
    
    return(
        <main className="start--page">
            <div className="blob--yellow"></div>
            <div className="blob--cyan"></div>
            <h1 className="quizz">Quizzical</h1>
            <p className="description">Some description if needed</p>
            <button className="button--start" onClick={props.gameState}> Start quiz </button>
        </main>
    )
}

