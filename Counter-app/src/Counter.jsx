import { useState } from "react";

function Counter() {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState(0);
  const [future, setFuture] = useState([]);

  const increment = () => {
    setPast([...past, present]);
    setPresent(present + 1);
    setFuture([]);
  };

  const decrement = () => {
    setPast([...past, present]);
    setPresent(present - 1);
    setFuture([]);
  };

  const undo = () => {
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    const newPast = past.slice(0, -1);
    console.log(newPast);

    setPast(newPast);
    setFuture([present, ...future]);
    setPresent(previous);
  };

  const redo = () => {
    if (future.length === 0) return;

    const next = future[0];
    const newFuture = future.slice(1);
    console.log(newFuture);

    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture);
  };

  const reset = () => {
    setPast([]);
    setPresent(0);
    setFuture([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Counter App with Undo / Redo / Reset
      </h1>
      <div className="text-6xl font-bold mb-6">{present}</div>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={undo}
          disabled={past.length === 0}
          className={`px-6 py-2 rounded ${
            past.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={future.length === 0}
          className={`px-6 py-2 rounded ${
            future.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600"
          } text-white`}
        >
          Redo
        </button>
        <button
          onClick={reset}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
