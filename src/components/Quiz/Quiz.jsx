import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Who wrote 'To be, or not to be'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Twain"],
      answer: "Shakespeare",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setError(""); // Clear error when an option is selected
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setError("Please select an option before proceeding.");
      return;
    }

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setShowResult(false);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {showResult ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Quiz Completed!
            </h1>
            <p className="text-lg mb-4">
              Your Score: {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">
              Quiz Question {currentQuestionIndex + 1}/{questions.length}
            </h1>
            <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
              <p className="text-lg font-medium">
                {questions[currentQuestionIndex].question}
              </p>
              <div className="flex flex-col gap-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="quiz-option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                      className="h-4 w-4 text-blue-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;