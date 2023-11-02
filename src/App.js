import logo from './logo.svg';
import './App.css';
import React from 'react'

let table = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {

  const resetTable = () => {
    table = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]


    setOne(null)
    setTwo(null)
    setThree(null)
    setFour(null)
    setFive(null)
    setSix(null)
    setSeven(null)
    setEight(null)
    setNine(null)


  }

  const [user, setUser] = React.useState('X');

  const [one, setOne] = React.useState(null);
  const [two, setTwo] = React.useState(null);
  const [three, setThree] = React.useState(null);
  const [four, setFour] = React.useState(null);
  const [five, setFive] = React.useState(null);
  const [six, setSix] = React.useState(null);
  const [seven, setSeven] = React.useState(null);
  const [eight, setEight] = React.useState(null);
  const [nine, setNine] = React.useState(null);


  const checkWin = () => {
    console.log(table[0][0] + " " + table[1][1] + " " + table[2][2])
    //CHECK ROWS
    if((table[0][0] === 'X' && table[0][1] === 'X' && table[0][2] === 'X')) alert("X has won!")
    if((table[0][0] === 'O' && table[0][1] === 'O' && table[0][2] === 'O')) alert("O has won!")

    if((table[1][0] === 'X' && table[1][1] === 'X' && table[1][2] === 'X')) alert("X has won!")
    if((table[1][0] === 'O' && table[1][1] === 'O' && table[1][2] === 'O')) alert("O has won!")

    if((table[2][0] === 'X' && table[2][1] === 'X' && table[2][2] === 'X')) alert("X has won!")
    if((table[2][0] === 'O' && table[2][1] === 'O' && table[2][2] === 'O')) alert("O has won!")

    //CHECK COLS
    if((table[0][0] === 'X' && table[1][0] === 'X' && table[2][0] === 'X')) alert("X has won!")
    if((table[0][0] === 'O' && table[1][0] === 'O' && table[2][0] === 'O')) alert("O has won!")

    if((table[0][1] === 'X' && table[1][1] === 'X' && table[2][1] === 'X')) alert("X has won!")
    if((table[0][1] === 'O' && table[1][1] === 'O' && table[2][1] === 'O')) alert("O has won!")

    if((table[0][2] === 'X' && table[1][2] === 'X' && table[2][2] === 'X')) alert("X has won!")
    if((table[0][2] === 'O' && table[1][2] === 'O' && table[2][2] === 'O')) alert("O has won!")

    //CHECK DIAGNALS
    if((table[0][0] === 'X' && table[1][1] === 'X' && table[2][2] === 'X')) alert("X has won!")
    if((table[0][0] === 'O' && table[1][1] === 'O' && table[2][2] === 'O')) alert("O has won!")

    if((table[0][2] === 'X' && table[1][1] === 'X' && table[0][2] === 'X')) alert("X has won!")
    if((table[0][2] === 'O' && table[1][1] === 'O' && table[0][2] === 'O')) alert("O has won!")


  }


  const buttonClick = (col, row, buttonNum)=>{
    if(table[col][row] != null) return

    //mark the button that was clicked
    table[col][row] = user;


    //set innerHTML of button to correct user (x,o)
    switch(buttonNum){
      case 1:
        setOne(user)
        break
      case 2:
        setTwo(user)
        break
      case 3:
        setThree(user)
        break
      case 4:
        setFour(user)
        break
      case 5:
        setFive(user)
        break
      case 6:
        setSix(user)
        break
      case 7:
        setSeven(user)
        break
      case 8:
        setEight(user)
        break
      case 9:
        setNine(user)
        break              
    }

    // set the user when the turn is over (a button is pressed)
    setUser((prev) => {
      if(prev === 'X') setUser('O')
      if(prev === 'O') setUser('X')
    })

    checkWin()
  }


  return (
    <div className='w-full flex items-center flex-col justify-center' style={{height: "calc(100vh)"}}>
      <div className="grid grid-rows-3 grid-cols-3 w-[50%] h-[50%] bg-gray-500">
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(0,0,1)}>{one}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(0,1,2)}>{two}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(0,2,3)}>{three}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(1,0,4)}>{four}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(1,1,5)}>{five}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(1,2,6)}>{six}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(2,0,7)}>{seven}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(2,1,8)}>{eight}</button>
          <button className="hover:bg-zinc-400 text-white" onClick={() => buttonClick(2,2,9)}>{nine}</button>
      </div>
      <div className="flex w-full items-center justify-center mt-4">
        <button onClick={()=> resetTable()} className="px-4 py-1 bg-red-500 hover:bg-red-400 rounded">Reset</button>
      </div>
    </div>
  );
}

export default App;
