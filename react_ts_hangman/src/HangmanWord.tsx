import React from 'react'

const HangmanWord = () => {

    const word="test"
    const guessedLetters=["t","e"]
  return (
    <div  style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}>
        {
            word.split("").map((lett,i)=>(
                <span key={i} style={{borderBottom:"0.1em solid black"}}>
                    <span style={{
                        visibility:guessedLetters.includes(lett)?"visible":"hidden"
                    }}>{lett}</span> 
                </span>
            ))
        }
    </div>
  )
}

export default HangmanWord