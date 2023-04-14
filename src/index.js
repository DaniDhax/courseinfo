import React, { useState } from "react"
import ReactDOM from "react-dom"


const App = (props) => {
  
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter+1),
  //   1000
  // )

  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))


