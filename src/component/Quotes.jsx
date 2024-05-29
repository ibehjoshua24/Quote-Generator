import { useState } from 'react'
import "./Quotes.css"

const randomQuotes = [
  {
    text:"A room without books is like a body without a soul",
    author:'Marcus Cicero'
  },
  {
    text:"You only live once but if you do it right once is enough",
    author:'Mae West'
  },
  {
    text:"Be the change you wish to see in the world",
    author:'Mahatma Gandhi'
  },
  {
    text:"If you tell the truth you wouldn't have to remember anything",
    author:'Mark Twain'
  },
  {
    text:"Always forgive your enemies, nothing annoys them so much",
    author:'Oscar Wilde'
  },
  
]



function Quotes() {
  const [Quote, setQuote] = useState({
    text: "Be yourself, everyone else is already taken",
    author: "Oscar Wilde"
  })

  function GenerateRandom() {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length)
    setQuote(randomQuotes[randomIndex])

  
}
  return (
    <div className='container'>
        <p>"{Quote.text}"</p>
        <h4>- {Quote.author}</h4>
        <div className='horizontal'></div>
        <button onClick={GenerateRandom}>generate random quote</button>
    </div>
  )
}

export default Quotes