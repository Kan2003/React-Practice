import React from 'react'

const ShowTimer = ({hours , minutes , seconds , handlePause , handleReset , handleResume , pause}) => {
  return (
    <div className="w-full h-screen bg-zinc-400 py-5 flex items-center flex-col gap-6 ">
    <h2 className="text-2xl text-center  ">Countdown Timer</h2>
    <div className="flex items-center justify-center gap-[30px] py-5">
      <p>{hours < 10 ? `0${hours}` : hours}</p>
      <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
      <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
    <div className="flex gap-3">
      {pause ? (
        <button
          className="p-4 bg-blue-600 text-black"
          onClick={() => handleResume()}
        >
          Resume
        </button>
      ) : (
        <button
          className="p-4 bg-blue-600 text-black"
          onClick={() => handlePause()}
        >
          Pause
        </button>
      )}
      <button
        className="p-4 bg-blue-600 text-black"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default ShowTimer