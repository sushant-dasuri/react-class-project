import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { CorrectGuesses } from './components/CorrectGuesses';
import { Guess } from './components/Guess';
import { HoneyComb } from './components/HoneyComb';
import './App.css'

function App() {

  const [data, setData] = useState();
  const [guess, setGuess] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState([]);



  const addLetter = (letter) => {
    setGuess((g) => g + letter)
  }

  const removeLetter = () => {
    setGuess(guess.slice(0, -1));
  }

  const addCorrectGuesses = () => {
    setCorrectGuesses([...correctGuesses, guess])
  }

  const checkGuess = () => {
    if(correctGuesses.includes(guess)) {
      console.log("Already there buddy");
    }

    else if(data.answers && data.answers.includes(guess)) {
      addCorrectGuesses(guess);
      console.log('Good job buddy')
    }

    else {
      console.log('Not in the list buddy');
    }

    setGuess('');
  }



  useEffect(() => {
    async function fetchData() {
    const result = await fetch('api/data.json', {headers: { 'Content-Type': 'application/json' }})
     const json = await result.json();
     setData (json.data.today);

    }
    fetchData();
  }, [])

  return (
    <>
    { data ? 
    <>
    <Header date={data.displayDate} editor={data.editor} /> 
    <CorrectGuesses correctGuesses={correctGuesses}></CorrectGuesses>
    <section className='container'>
      <div className='inputs'>
        <div className='center'>
          <Guess guess={guess}></Guess>
          <HoneyComb centerLetter={data.centerLetter} outerLetters={data.outerLetters} 
          validLetters={data.validLetters} addLetter={addLetter} removeLetter={removeLetter} checkGuess={checkGuess}></HoneyComb>
        </div>
      </div>
    </section>
    </>
    :<p>...Loading</p> 
    
    }

    </>
  )
}

export default App
