import { useCallback, useEffect, useState } from "react"
import HangmanDrawings from "./HangmanDrawings"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

const getWord=()=>{
  return words[Math.floor(Math.random()*words.length)]

}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters=guessedLetters.filter(letter=>!wordToGuess.includes(letter))

  const isLoser=incorrectLetters.length>=6
  const isWinner=wordToGuess.split("").every(letter=>guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter:string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters=>[...currentLetters,letter])
    },
    [guessedLetters, isLoser, isWinner],
  )
  

  // const addGuessedLetter=(letter:string)=>{
  //   if (guessedLetters.includes(letter))return

  //   setGuessedLetters(currentLetters=>[...currentLetters,letter])
  // }

  useEffect(() => {
    const handler = (e:KeyboardEvent)=>{
      const key =e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress",handler)
  
    return () => {
      document.removeEventListener("keypress",handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e:KeyboardEvent)=>{
      const key =e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
      
    }

    document.addEventListener("keypress",handler)
  
    return () => {
      document.removeEventListener("keypress",handler)
    }
  }, [guessedLetters])


  

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
        {isWinner && "You won"}
        {isLoser && "You lost"}
      </div>
      <HangmanDrawings numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{
        alignSelf:"stretch"
      }}>
        <Keyboard 
        disabled={isLoser || isWinner}
        activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetters={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
