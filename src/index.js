import React from "react"
import ReactDOM from "react-dom"

  const App = ({counter}) => {
    const estilo = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
      backgroundColor: 'yellow',
      fontsize: '20px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black'
    }

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return (
    <div style={estilo}>
      <h1>Contador</h1>
      <p style={{ fontWeight: 900, fontSize: '24px' }}>{`${hours}:${minutes}:${seconds}`}</p>
    </div>
  )
}

let counter = 1

setInterval(
  () => {
    ReactDOM.render (<App counter={counter}/>, document.getElementById('root'))
    counter += 1
  },
  1000
)


//ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'))