type HangmanWordProps={
  reveal?:boolean
  wordToGuess:string
  guessedLetters:string[]
}

const HangmanWord = ({wordToGuess,guessedLetters,reveal=false}:HangmanWordProps) => {

    
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
            wordToGuess.split("").map((lett,i)=>(
                <span key={i} style={{borderBottom:"0.1em solid black"}}>
                    <span style={{
                        visibility:guessedLetters.includes(lett) || reveal?"visible":"hidden",
                        color:reveal && !guessedLetters.includes(lett)?"red":"black"
                    }}>{lett}</span> 
                </span>
            ))
        }
    </div>
  )
}

export default HangmanWord