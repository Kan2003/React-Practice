import React, { useState } from "react";

const Undoable = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redo, setRedo] = useState([]);
  const [count, setCount] = useState(0);

  function historyCreate(curr, prev, total) {
    // console.log(curr , prev , total);
    const obj = {
      curr,
      prev,
      total,
    };

    const hi = [...history];
    hi.unshift(obj);
    setHistory(hi);
  }

  const handleUndo = () => {
    if (history.length > 0) {
      if (count >= 5) {
        alert("Cannot undo more than 5 times");
        return;
      }
      setCount(() => count + 1);
      const cpyHistory = [...history];
      const first = cpyHistory.shift();
      setHistory(cpyHistory);

      const cpyRedo = [...redo];
      cpyRedo.push(first);
      setRedo(cpyRedo);
      setValue(first.prev);
    }
  };


  const handleRedo = () => {
    if (redo.length > 0) {
      // console.log("redo")
      const cpyRedo = [...redo];
      const poped = cpyRedo.pop();
      // console.log(poped)
      const { curr, prev, total } = poped;
      setValue(total);
      setRedo(cpyRedo)
      const cpyHistory = [...history];
      const h1 = cpyHistory.unshift(poped);
      setHistory(cpyHistory);
    }
    else{
        alert("No more redo available");
    }
  };

  const handleClick = (val) => {
    const curr = parseInt(val);
    historyCreate(curr, value, curr + value);
    setValue(curr + value);
  };
  return (
    <div className="w-full h-screen bg-zinc-800 text-white flex items-center flex-col gap-4">
      <h2 className="text-center text-3xl">Undoable CountDown</h2>
      <div className="flex items-center gap-7">
        <button className="text-2xl p-2 bg-purple-700" onClick={handleUndo}>
          Undo
        </button>
        <button className={`text-2xl p-2 ${count > 0 ? 'bg-purple-700' : 'bg-slate-400'}  `} onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="action flex items-center justify-around w-[30vw]">
        {[-100, -10, -1].map((btn, key) => {
          return (
            <button
              onClick={() => handleClick(btn)}
              key={key}
              className="text-2xl p-2 bg-purple-700"
            >
              {btn}
            </button>
          );
        })}
        <p>{value}</p>
        {[+100, +10, +1].map((btn, key) => {
          return (
            <button
              key={key}
              onClick={() => handleClick(btn)}
              className="text-2xl p-2 bg-purple-700"
            >
              {btn}
            </button>
          );
        })}
      </div>

      <div className="w-[15vw] h-[20vh] border-[2px] text-center border-white overflow-y-auto">
        <h4>History</h4>
        <div>
          {history.map((h, index) => {
            return (
              <p key={index}>
                {h.curr} ( {h.prev} -> {h.total}){" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Undoable;
