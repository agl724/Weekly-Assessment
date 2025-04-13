import React from 'react';
import ReactDOM from 'react-dom/client';

// UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// Root App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <UserCard name="Pari Agrawal" email="pari@example.com" />
    </div>
  );
};

// Render to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
