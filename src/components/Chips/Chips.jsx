import React, { useEffect, useState } from 'react'

const Chips = () => {
    const [chips , setChips] = useState([])
    const [inputvalue , Setinputvalue] = useState('')
    const handlekeyDown = (e) => {
        debugger
        if(e.key == 'Enter' && inputvalue.length > 0){
            setChips((prev) => [...prev , inputvalue.trim()])
            Setinputvalue('')
        }
    }

    const handleDelete= (index) => {
        // const index = chips.indexOf(item);
        // if(index != null){
        //     chips.splice(index , 1)
        //     console.log(chips)
        //     setChips([...chips])
        // }
        setChips((prev) => prev.filter((_ , ind)  => (
            index != ind
        )))
    }


  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh] flex-col gap-6'>
      <input type="text" className='p-2 border-black border-[2px]' value={inputvalue} onChange={(e) => Setinputvalue(e.target.value)} onKeyDown={handlekeyDown}  />

      <div className='flex gap-9 flex-wrap items-center justify-center'>
        {chips.length > 0 && chips.map((item , index) => (
            <p className='p-3 bg-slate-400 text-black rounded-md mr-3' key={index}>{item} <span onClick={() => handleDelete(index)} className='text-red-900 font-extrabold'>X</span></p>
        ))}
      </div>
    </div>
  )
}

export default Chips
