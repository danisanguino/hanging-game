import './App.css'
import { letters } from '../helpers/letters';
import { HangImages } from './components';
import { useEffect, useState } from 'react';

function App() {

  const [word] = useState("RAJOY");
  const [hiddenWord, setHiddenWord] = useState ("_ ".repeat(word.length));
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determinar si pierde
  useEffect(() => {
    if( attemps >= 10) {
      setLose(true)
    }
    
  }, [attemps])

  //Determinar si gana
  useEffect(() => {

    const currentHiddenWord = hiddenWord.split(" ").join("");

    if (currentHiddenWord === word) {
      setWon(true);
    }
    
  }, [hiddenWord])
  
  
  

  //Funcion para las letras
  const checkLetter = (letter: string) => {
      if (lose) {
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

  return (
    <div className='App'>
        <h1>The Game of your life</h1>
        <HangImages imageNumber={attemps}/>


        {/* PALABRA */}
        <h3>{hiddenWord}</h3>
        <h3>Intentos = {attemps}</h3>
        { (lose) ? <h3>You Lose! The word is {word}</h3>: ""}
        { (won) ? <h3>YOU WIN!!</h3>: ""}


          {/* Botones abecedario */}
            {
              letters.map( letter => (
                <button
                onClick={()=> checkLetter(letter)}key= {letter}>{letter}</button>
              ))
          }
    </div>
  )
}

export default App
