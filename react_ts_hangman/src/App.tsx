import { useState } from "react"
import HangmanDrawings from "./HangmanDrawings"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

function App() {

  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div style={{
      display:"flex",
      maxWidth:"800px",
      flexDirection:"column",
      gap:"2rem",
      alignItems:"center",
      margin:"0 auto"
    }}>
      <div style={{
        fontSize:"2rem",
        textAlign:"center"
      }}>
        Win Lose
      </div>
      <HangmanDrawings/>
      <HangmanWord/>
      <div style={{
        alignSelf:"stretch"
      }}><Keyboard/></div>
    </div>
  )
}

export default App