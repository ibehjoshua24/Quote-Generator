import "./App.css"
import Quotes from "./component/Quotes"




function App({author}, {text}) {
  return (
    <div>
      <Quotes
      text={text}
      author={author}/>
    </div>
  )
}

export default App