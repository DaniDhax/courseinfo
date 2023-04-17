import React, { useState } from "react"
import ReactDOM from "react-dom"


const App = (props) => {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


