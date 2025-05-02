import React, { useEffect, useRef, useState } from "react";

const Accordian = () => {
    const ref = useRef()
  const data = [
    {
      title: "Introduction",
      content: "This section provides an overview of the topic.",
    },
    {
      title: "Getting Started",
      content: "Here’s how to set up and begin using the application.",
    },
    {
      title: "Features",
      content: "This part covers all the main features in detail.",
    },
    {
      title: "FAQs",
      content: "Answers to frequently asked questions.",
    },
    {
      title: "Contact",
      content: "Information on how to get in touch for support or feedback.",
    },
  ];
  const [selectedQuestion, SetSelectedQuestion] = useState();

  const handleClick = (i) => {
    if (selectedQuestion == i) {
      SetSelectedQuestion(null);
    } else {
      SetSelectedQuestion(i);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current.contains(event.target)) {
        SetSelectedQuestion(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [])
  return (
    <div ref={ref} className="w-[500px] mx-auto  rounded-md flex flex-col">
      {data.length > 0 ? (
        data.map((item, i) => (
          <div className="gap-3">
            <div
              className="w-full flex items-center justify-between px-3 py-5 rounded-md border-[1px] border-zinc-500"
              onClick={() => handleClick(i)}
            >
              <h1>{item.title}</h1>
              {i === selectedQuestion ? (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                >
                  <path d="M0 7 L5 2 L10 7 Z" />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                >
                  <path d="M0 2 L5 7 L10 2 Z" />
                </svg>
              )}
            </div>
            {i === selectedQuestion && (
              <div className="text-sm border-[0.5px] border-zinc-400 px-3 py-5 bg-zinc-200 rounded-md ">
                {item.content}
              </div>
            )}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Accordian;
