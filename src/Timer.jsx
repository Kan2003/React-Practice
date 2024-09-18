import React, { useState, useEffect } from 'react';

function Timer() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      let totalSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
      setTimerId(setInterval(() => {
        if (totalSeconds > 0) {
          const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
          const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
          const s = (totalSeconds % 60).toString().padStart(2, '0');
          setHours(h);
          setMinutes(m);
          setSeconds(s);
          totalSeconds--;
        } else {
          clearInterval(timerId);
          setIsRunning(false);
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Timer Complete');
          } else {
            alert('Timer Complete');
          }
        }
      }, 1000));
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(timerId);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerId);
    setIsRunning(false);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <div>
      {isRunning ? (
        <div>
          {hours}:{minutes}:{seconds}
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div style={{width : "100vw" , display: "flex" , alignItems:"center" , justifyContent:"center"}}>
          <input type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.value)} aria-label="Hours" />
          <input type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)} aria-label="Minutes" />
          <input type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} aria-label="Seconds" />
          <button onClick={handleStart}>Start</button>
        </div>
      )}
    </div>
  );
}

export default Timer;