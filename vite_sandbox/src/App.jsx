import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HoneyComb } from './components/HoneyComb';
import './App.css'

function App() {

  const [data, setData] = useState();
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
    <section className='container'>
      <div className='inputs'>
        <div className='center'>
          <HoneyComb centerLetter={data.centerLetter} outerLetters={data.outerLetters} 
          validLetters={data.validLetters}></HoneyComb>
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
