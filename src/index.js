import React from "react"
import ReactDOM from "react-dom"

const Hello = (props) => {
  
  const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }
    
    return (
      <div>
        <p>{JSON.stringify(props)}</p>
        <p>Hello {props.name}, you are {props.age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  
  const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <br></br>
        <Hello name={name} age={age} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'))