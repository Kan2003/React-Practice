import React, { useEffect, useState } from "react";
import ShowTimer from "./ShowTimer";
import InputTime from "./InputTime";

const CountDown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const handleChange = (val, id) => {
    if (id === "h") {
      const h = parseInt(val);
      if (h >= 0 && h <= 23) {
        setHours(h);
      }
    } else if (id === "m") {
      const m = parseInt(val);
      if (m >= 0 && m <= 59) {
        setMinutes(m);
      }
    } else {
      const s = parseInt(val);
      if (s >= 0 && s <= 59) {
        setSeconds(s);
      }
    }
  };

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid time!");
      return;
    }
    setStart(true);
  };
  const handleResume = () => {
    setPause(false);
    runtimer(seconds , minutes , hours , timerId)
  };
  const handlePause = () => {
    setPause(true);
    clearInterval(timerId)
  };

  const handleReset = () => {
    setStart(false);
    setPause(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  }

  const runtimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
    }
  };
  useEffect(() => {
    let tid;
    if (start) {
      tid = setInterval(() => {
        runtimer(seconds, minutes, hours, tid);
      }, 1000);
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [hours, minutes, seconds, start]);

  return (
    <>
      {start ? (
       <ShowTimer hours={hours} minutes={minutes} pause={pause} seconds={seconds} handleResume={handleResume} handlePause={handlePause} handleReset={handleReset}  / >
      ) : (
       
       <InputTime handleChange={handleChange} handleStart={handleStart} />
      )}
    </>
  );
};

export default CountDown;
