import './App.css'
import { letters } from '../helpers/letters';
import { HangImages } from './components';
import { useEffect, useState } from 'react';
import { getRandomWord } from '../helpers/getRandomWord';

function App() {

  const [word] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState ("_ ".repeat(word.length));
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //When user lose
  useEffect(() => {
    if( attemps >= 10) {
      setLose(true)
    }
    
  }, [attemps])

  //When user win
  useEffect(() => {

    const currentHiddenWord = hiddenWord.split(" ").join("");

    if (currentHiddenWord === word) {
      setWon(true);
    }
    
  }, [hiddenWord])
  
  
  

  //Manipulate letters
  const checkLetter = (letter: string) => {
      if (lose) {
        return;
      }

      if (won) {
        return;
      }

      if (!word.includes(letter)) {
        setAttemps( Math.min( attemps + 1, 10 ));
        return;
      } 

      const hiddenWordArray = hiddenWord.split(" ");

      for (let i = 0; i < word.length; i++){
        
        if(word[i] === letter) {
            hiddenWordArray[i] = letter;
        }

        setHiddenWord(hiddenWordArray.join(" "));
      }
    
    // setHiddenWord(hiddenWord.substring(0, index * 2) + letter + hiddenWord.substring(index * 2 + 2));
    
  }

  //Restart
  const again = ()=> {
    window.location.reload()
  }

  return (
    <div className='App'>
        <h1>The Game of your life</h1>
        <h3>Name of Sports</h3>
        <HangImages imageNumber={attemps}/>


        {/* WORD */}
        <h3>{hiddenWord}</h3>
        <h3>Attemps = {attemps}</h3>
        { (lose) ? <h3>You Lose! The word is {word}</h3>: ""}
        { (won) ? <h3>YOU WIN!!</h3>: ""}

        <div className='btn-letters'>
          {/* LETTERS BUTTONS */}
            {
              letters.map( letter => (
                <button
                onClick={()=> checkLetter(letter)}key= {letter}>{letter}</button>
              ))
          }
          </div>
          
          <button className='btn-again' onClick={again}>AGAIN</button>
    </div>
  )
}

export default App
