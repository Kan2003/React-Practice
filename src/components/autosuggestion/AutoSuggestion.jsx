import React, { useEffect, useState } from 'react'

const AutoSuggestion = () => {
    const data = [
        "kanha vishwkarma",
        "rishi parmar ",
        "kanhanehsa shara",
        "rishijskiijs",
        "nehakanha",
    ];

    const [value , setValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    
    useEffect(() => {
        const filter = data.filter(item => item.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filter)
    }, [value])

    console.log(value)

  return (
    <>
    <div className='w-full h-screen py-5 bg-zinc-900'>
        <h1 className='text-center text-3xl text-white underline'>Auto<span className='text-blue-600'>S</span>uggestion </h1>

        <div className='flex flex-col justify-center items-center py-8'>
            {/* Auto Suggestion Input */}
            <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='Type here...' className='w-[20vw] px-5 py-3 text-xl rounded-md border-2 bg-zinc-900 text-white border-gray-400 focus:outline-none' />
            <div className='w-[20vw] text-white h-[30vh] flex flex-col'>
                <div className='w-full h-full overflow-y-auto border-2 border-gray-500'>
                    {
                        value !== '' &&  filteredData.map((val , index) => {
                            return  <h4 key={index} className='text-center text-xl py-2 '>{val}</h4>
                        })
                    }
                    {
                        value === '' && <h4 className='text-center text-xl py-2 text-white'>No Results Found</h4>
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AutoSuggestion