'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md">
        <p className="font-bold">Success!</p>
        <p>Your support ticket has been submitted.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200 space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Ticket Title</label>
        <input type="text" id="title" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" name="description" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
      </div>
      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
        <select id="priority" name="priority" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button type="submit" className="mt-4 w-full py-3 px-6 rounded-md bg-blue-900 text-white font-semibold hover:bg-blue-800">
        Submit Ticket
      </button>
    </form>
  );
}

