import React, { useState} from "react"
import ReactDOM from "react-dom"

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState (0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setLeft (left + 1)
        setAll (allClicks.concat('L'))
    }

    const handleRightClick = () => {
        setRight (right + 1)
        setAll (allClicks.concat('R'))
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <br></br>
            <p>{allClicks.join('-')}</p>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById ('root'))