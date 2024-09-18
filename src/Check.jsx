import React, { useState } from 'react'

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
    //   const [show , setShow] = useState(false);
    const [openIndex , setOpenIndex] = useState(0);
      const toggleAnswer =  (index) => {
        setOpenIndex(openIndex === index ? null : index);
      }

      return (
        <div>
          {num.map((item, index) => (
            <div key={index}>
              <h2 onClick={() => toggleAnswer(index)} >{item.question}</h2>
              {
                openIndex == index && <p>{item.answer}</p>
              }
            </div>
          ))}
        </div>
      )
  return (
    <div>Check</div>
  )
}

export default Check