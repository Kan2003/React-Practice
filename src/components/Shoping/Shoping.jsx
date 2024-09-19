import React, { useEffect, useState } from "react";
import axios from "axios";
const Shoping = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);
  const [filter, setFilter] = useState([]);
  const [list, setList] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    axios.get("https://api.frontendeval.com/fake/food/mi").then((response) => {
      setValue(response.data);
    });
  });

  useEffect(() => {
    const filteredData = value.filter((v) => v.includes(input.toLowerCase()));
    setFilter(filteredData);
  }, [input]);

  const handleClick = (key) => {
    const val = value[key];
    if (!list.includes(val)) {
      const li = [...list];
      li.push(val);
      setList(li);
      setShow(false);
    }
  };

  const handleDelete = (v) => {
    const filtered = list.filter((e) => e !== v);
    setList(filtered);
  };

  const handleInput = (e) => {
    setInput(e);
    setShow(true);
  };

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl">Shopping List</h1>
        <input
          type="text"
          onChange={(e) => handleInput(e.target.value)}
          className="w-[15vw] p-5 outline-none border-[2px] border-white bg-black text-white"
        />
        <div>
          {input && show ? (
            filter.map((v, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                className="w-[15vw] border-[1px] bg-zinc-600 py-4 px-2"
              >
                {v}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <h3 className="text-xl">List</h3>
          {list.map((v, i) => (
            <div className="flex items-center justify-between w-[15vw] border-[1px] bg-white py-4 px-2 text-black">
              <div key={i} className="">
                <p>{v}</p>
              </div>
              <span className="cursor-pointer" onClick={(e) => handleDelete(v)}>
                X
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoping;
