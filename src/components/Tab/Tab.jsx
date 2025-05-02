import React, { useState } from "react";

const Tab = () => {
  const tabArray = [
    {
      title: "Tab1",
      ontent: "this is tab 1",
    },
    {
      title: "Tab2",
      ontent: "this is tab 2",
    },
    {
      title: "",
      ontent: "this is tab 3",
    },
    {
      title: "Tab4",
      ontent: "",
    },
  ];

  const [selectIndex, SetSelectdindex] = useState(0);
  return (
    <>
      <div className="flex items-center justify-between w-[40%] m-auto border-black border-[1px] rounded-sm px-4 py-6">
        {tabArray.map((item, index) => (
          <div key={index} className="">
            <button className={`${selectIndex === index  && 'text-blue-800 font-bold'}`} onClick={() => SetSelectdindex(index)}>{item.title !== '' ? item.title : `Tab${index+ 1}`}</button>

            <p className={`${selectIndex === index ? 'block' : 'hidden'}`}>{item.ontent !== '' ? item.ontent : 'No content available'}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;
