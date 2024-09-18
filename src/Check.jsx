import React, { useState } from 'react'
import Faq from './Faq';

const Check = () => {
    const num = [
        {
          question: "How many bones does a cat have?",
          answer: "A cat has 230 bones - 6 more than a human",
          open : false
        },
        {
          question: "How much do cats sleep?",
          answer: "The average cat sleeps 12-16 hours per day",
          open : false
        },
        {
          question: "How long do cats live",
          answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
          open : false
        },
      ]

      return (
        <div className='w-full h-screen bg-zinc-500 flex items-center py-8 flex-col gap-5'>
          {num.map((faq, index) => <Faq faq={faq} index={index} />)}
        </div>
      )
}

export default Check