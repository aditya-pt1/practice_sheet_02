import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tailwind Counter App</h1>
      <h2 className="text-5xl font-bold text-blue-600 mb-8">{count}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
