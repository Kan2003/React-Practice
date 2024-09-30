import React from 'react'

const Pills = ({image , text , onClick}) => {
  return (
    <span className='flex h-[20px] bg-zinc-700 items-center rounded-md p-2' onClick={onClick}>
        <img className='h-[20px] w-[20px]' src={image} alt="" />
        <span className='text-sm'>{text} &times;</span>
    </span>
  )
}

export default Pills