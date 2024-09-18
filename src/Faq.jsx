import React, { useState } from 'react'

const Faq = ({faq}) => {
    const [ishow , setIshow] = useState(false)
    const handleShow =() => {
        setIshow(!ishow)
  
    }
  return (
    <div className='w-[50vw] bg-zinc-300 py-4'>
       <div className='flex gap-4'>
        <h2 className='text-xl' onClick={() => handleShow()}>^</h2>
        <h3>{faq.question}</h3>
       </div>
       {ishow && <p>{faq.answer}</p>}
    </div>
  )
}

export default Faq