import { useState } from 'react'
import './App.css'

function Square({value, onSquareClick}) {
  return (
    <div className='square' onClick={onSquareClick}>
      {value}
    </div>
  )
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [X, setX] = useState(false)

  const handleClick = (i) => {
    if(squares[i] !== null || winner != null) {
      return
    }
    const newSquares = squares.slice()
    newSquares[i] = X ? 'X' : 'O'
    setSquares(newSquares)
    setX(!X)
  }

  const check = () => {
    const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    for (let i=0; i<lines.length; i++) {
      const[a,b,c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const winner = check()

  return (
    <div className="app">
      <h1>Tic-Tac-Toe {winner !== null && `Winner: ${winner}`}</h1>
      <div className='board'>
      {
        squares.map((v, i) => (
          <Square key={i} value={v} onSquareClick={() => handleClick(i)}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
