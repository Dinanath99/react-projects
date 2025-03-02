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
  {
    id: 5,
    question: "Which is the longest river in Nepal?",
    options: ["Bagmati", "Gandaki", "Koshi", "Karnali"],
    correctAnswer: "Karnali",
    explanation: "Karnali is the longest river in Nepal.",
  },
  {
    id: 6,
    question: "What is Nepal's national flower?",
    options: ["Lotus", "Sunflower", "Rhododendron", "Lily"],
    correctAnswer: "Rhododendron",
    explanation: "Rhododendron (Lali Gurans) is Nepal's national flower.",
  },
  {
    id: 7,
    question: "Who is known as the 'Father of the Nation' in Nepal?",
    options: [
      "B.P. Koirala",
      "King Tribhuvan",
      "Prithvi Narayan Shah",
      "Gyanendra Shah",
    ],
    correctAnswer: "Prithvi Narayan Shah",
    explanation:
      "Prithvi Narayan Shah is regarded as the Father of the Nation for unifying Nepal.",
  },
  {
    id: 8,
    question: "Which is the largest lake in Nepal?",
    options: ["Tilicho Lake", "Rara Lake", "Phewa Lake", "Begnas Lake"],
    correctAnswer: "Rara Lake",
    explanation: "Rara Lake is the largest lake in Nepal.",
  },
  {
    id: 9,
    question: "Which year was Nepal declared a republic?",
    options: ["2005", "2006", "2008", "2010"],
    correctAnswer: "2008",
    explanation: "Nepal was declared a republic in 2008.",
  },
  {
    id: 10,
    question: "What is the currency of Nepal?",
    options: ["Rupee", "Dollar", "Yen", "Pound"],
    correctAnswer: "Rupee",
    explanation: "Nepalese Rupee (NPR) is the official currency of Nepal.",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-center border border-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Quiz App</h1>
        {quizFinished ? (
          <div>
            <h2 className="text-xl font-bold text-gray-800">Quiz Completed!</h2>
            <p className="text-lg mt-2">
              Your Score: {score} / {questions.length}
            </p>
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-medium mb-4 text-gray-800">
              {questions[currentQuestionIndex].question}
            </h2>
            <ul className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  className={`p-3 rounded-md cursor-pointer shadow text-lg font-semibold transition duration-200 transform hover:scale-105 ${
                    selectedOption === option
                      ? option === questions[currentQuestionIndex].correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            {showExplanation && (
              <p className="mt-4 text-gray-700 italic bg-yellow-200 p-2 rounded-md">
                {questions[currentQuestionIndex].explanation}
              </p>
            )}
            <div className="mt-4 flex justify-between">
              <button
                className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-gray-900"
                onClick={() =>
                  setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
