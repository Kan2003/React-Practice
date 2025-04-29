import React, { useState } from 'react'

const Guess = () => {
    const [guess , SetGuess] = useState(parseInt(Math.random()*100));
    const [inputValue , SetInputValue] = useState()
    const [attempt , SetAttempt] = useState(0)
    const [message , SetMessage] = useState()
    console.log(guess)
    const handleClick = (e) => {
        SetInputValue('')
        if(inputValue > 100){
            SetMessage('Please Enter a number between 1 to 100')
            SetAttempt((pre) => pre + 1)
        }
        else if(inputValue > guess){
            SetMessage('Too High! try again')
            SetAttempt((pre) => pre + 1)
        } else if(inputValue < guess){
            SetMessage('Too Low! try again')
            SetAttempt((pre) => pre + 1)
        } else if(parseInt(inputValue) === guess){
            SetMessage(`congrotualation you guess the number in ${attempt} attempt`)
        }
    }

    const handleReset = () => {
        const newguess = parseInt(Math.random()*100)
        SetGuess(newguess)
        SetAttempt(0)
        SetMessage('')
    }
    
  return (
    
    <div className='w-full h-[100vh] flex justify-center flex-col items-center gap-4'>
      <input type="number" className='px-1 py-3 w-[200px] border-black border-[2px] no-arrow' value={inputValue} onChange={(e) => SetInputValue(e.target.value)} />

      <div className=' flex gap-3'>
        <button className='p-2 border-black border-[1px]' onClick={handleClick}>Check Guess</button>
        <button className='p-2 border-black border-[1px]' onClick={handleReset}>Reset</button>
      </div>


      <p>{message}</p>
    </div>
  )
}

export default Guess
