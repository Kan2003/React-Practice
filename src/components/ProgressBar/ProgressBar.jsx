import React, { useState } from 'react'

const ProgressBar = () => {
    const [percent , Setpercent] = useState(50);

    const hadleClick = (e) => {
        if(e === 'i' && percent <  100){
            Setpercent((prev) => prev + 10)
        }

        if(e === 'd' && percent > 0){
            Setpercent((prev) => prev - 10)
        }
    }

    console.log(percent)
  return (
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
        <div>
            <h4>Progress Bar</h4>
            
            <div className={`w-[300px] h-[30px] rounded-md border-[1px] border-black overflow-hidden transition-transform duration-500 ease-in-out`}>
                <div style={{ width : `${percent}%`}} className={`h-[30px] bg-red-600 transition-transform duration-500 ease-in-out`}></div>
            </div>

            <button onClick={() => hadleClick('d')} className='px-3 py-2 bg-slate-400 mr-3'>-10</button>
            <button onClick={() => hadleClick('i')} className='px-3 py-2 bg-slate-400 '>+10</button>
        </div>
    </div>
  )
}

export default ProgressBar
