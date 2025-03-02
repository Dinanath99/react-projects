import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
    correctAnswer: "Kathmandu",
    explanation: "Kathmandu is the capital and largest city of Nepal.",
  },
  {
    id: 2,
    question: "Which is the national animal of Nepal?",
    options: ["Tiger", "Cow", "Elephant", "Red Panda"],
    correctAnswer: "Cow",
    explanation:
      "The cow is the national animal of Nepal and is considered sacred.",
  },
  {
    id: 3,
    question: "Which mountain is the highest in Nepal?",
    options: ["K2", "Kangchenjunga", "Everest", "Annapurna"],
    correctAnswer: "Everest",
    explanation:
      "Mount Everest, the world's highest peak, is located in Nepal.",
  },
  {
    id: 4,
    question: "What is the official language of Nepal?",
    options: ["Maithili", "Newari", "Nepali", "Bhojpuri"],
    correctAnswer: "Nepali",
    explanation:
      "Nepali is the official language of Nepal, spoken by the majority of people.",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Nepal Quiz</h1>
        <h2 className="text-lg font-medium mb-4">
          {questions[currentQuestionIndex].question}
        </h2>
        <ul className="space-y-2">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <li
              key={index}
              className={`p-2 rounded-md cursor-pointer shadow-md text-lg ${
                selectedOption === option
                  ? option === questions[currentQuestionIndex].correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>

        {showExplanation && (
          <p className="mt-4 text-gray-700 italic">
            {questions[currentQuestionIndex].explanation}
          </p>
        )}

        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
