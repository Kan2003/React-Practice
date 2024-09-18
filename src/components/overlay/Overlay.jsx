import React, { useState } from "react";

const Overlay = () => {
  const [showpage, setShowpage] = useState(false);
  const [value, setValue] = useState("Show Offer");

  const handleAccept = () => {
    setValue("Offer Accepted");
    setShowpage(false);
  };

  const handleoutsideClick = (e) => {
   let value = (e.target.className).split(" ")[0];
   if(value === 'fullBox'){
     setShowpage(false);
   }
  }

  return (
    <>
      {showpage ? (
        <div onClick={handleoutsideClick} className="fullBox w-full h-screen flex items-center justify-center bg-zinc-500 backdrop-blur-3xl ">
           <div  className="mainbox w-[30vw] h-[30vh] bg-white ">
              <h2 onClick={() => setShowpage(false)} className="p-3 text-xl cursor-pointer">X</h2>
              <div className="w-full h-full flex items-center justify-center">
              <h2  onClick={() => handleAccept()} className="py-2 px-4 text-3xl text-black">Accept the offer</h2>
              </div>
           </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <button
            onClick={() => setShowpage(true)}
            className="py-2 px-4 border-black border-[2px]"
          >
            {value}
          </button>
        </div>
      )}
    </>
  );
};

export default Overlay;
