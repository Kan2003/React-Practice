import React from 'react'

const InputTime = ({handleChange ,handleStart }) => {
  return (
    <div className="w-full h-screen bg-zinc-400 py-5 flex items-center flex-col gap-6  ">
    <h2 className="text-2xl text-center  ">Countdown Timer</h2>
    <div className="flex items-center justify-center gap-[30px] py-5">
      <p>Hours</p>
      <p>Minutes</p>
      <p>Second</p>
    </div>

    <div className="flex items-center justify-center gap-[30px]">
      <input
        type="number"
        id="h"
        onChange={(e) => handleChange(e.target.value, e.target.id)}
        className="outline-none w-[50px] px-2 py-3"
      ></input>
      <input
        type="number"
        id="m"
        onChange={(e) => handleChange(e.target.value, e.target.id)}
        className="outline-none w-[50px] px-2 py-3"
      ></input>
      <input
        type="number"
        id="s"
        onChange={(e) => handleChange(e.target.value, e.target.id)}
        className="outline-none w-[50px] px-2 py-3"
      ></input>
    </div>
    <button
      className="p-4 bg-blue-600 text-black"
      onClick={() => handleStart()}
    >
      Start
    </button>
  </div>
  )
}

export default InputTime