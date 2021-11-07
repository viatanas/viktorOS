import { useState } from "react";

export default function Ama() {
  const [question, setQuestion] = useState();

  const handleInput = (event) => {
    setQuestion(event.target.value);
  };

  const fetchQuestion = () => {
    fetch("http://localhost:3000/api/ama", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(question),
    });
  };

  return (
    <div className="flex flex-col space-y-3 items-start">
      <textarea
        onChange={(event) => handleInput(event)}
        className="w-1/2 h-20 border border-gray-900"
      ></textarea>
      <button
        onClick={() => fetchQuestion()}
        className="px-8 py-3 bg-gray-900 text-white"
      >
        Send question
      </button>
    </div>
  );
}
