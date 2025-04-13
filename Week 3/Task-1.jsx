import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Text Updater</h1>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-md"
      />

      <p className="mt-4 text-lg text-blue-600 font-medium">
        You typed: <span className="font-bold">{text}</span>
      </p>
    </div>
  );
};

export default TextUpdater;
