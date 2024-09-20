import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
        "https://images.unsplash.com/photo-1463453091185-61582044d556",
        "https://images.unsplash.com/photo-1531983412531-cf4a353e8fcf",
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
        "https://images.unsplash.com/photo-1508919801845-fc2ae1bc5bb0",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
        "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9"
      ];

      const [count , setCount] = useState(0);
      const [time , setTime] = useState(3000);
      const handleBack = () => {
        if(count > 0) setCount(count - 1);
        else setCount(images.length - 1);
        setTime(3000)
      }

      const handleNext = () => {
        if(count < images.length - 1) setCount(count + 1);
        else setCount(0);
        setTime(3000)
      }

      useEffect(() => {
        const timer = setTimeout(() => {
            setCount(() => count + 1)
        }, time)
        return () => {
            clearTimeout(timer)
        }
      },[count , time])

      
  return (
    <div className='w-full h-screen relative'>
        <button onClick={handleBack} className='text-xl absolute top-[50%] left-0 px-4 py-2 bg-black text-white'> prev </button>
        <div className='w-full h-full overflow-hidden'>
            <img src={images[count]} className='w-full h-full object-cover' alt="" />
        </div>
        <button onClick={handleNext} className='text-xl absolute top-[50%] right-0 px-4 py-2 bg-black text-white'> Next </button>
    </div>
  )
}

export default Carousel