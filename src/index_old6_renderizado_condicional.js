import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                <strong>The app is used by pressing the buttons.</strong>
            </div>
        )
    }

    return (
        <div>
            <strong>Button press history: {props.allClicks.join(' ')}</strong>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleResetClick = () => {
        console.log('Reseteando')
        setLeft (0)
        setRight (0)
        setAll([])

    }
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button text="Left" onClick={handleLeftClick} />
            <Button text="Reset" onClick={handleResetClick} />
            <Button text="Right" onClick={handleRightClick} />    
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))