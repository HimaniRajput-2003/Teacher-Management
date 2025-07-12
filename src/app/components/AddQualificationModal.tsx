'use client';
import React, { useState } from 'react';

interface Props {
  onAdd: (name: string, rate: number) => void;
}

export default function AddQualificationModal({ onAdd }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !rate) {
      setError('All fields are required.');
      return;
    }

    const numericRate = parseFloat(rate);
    if (isNaN(numericRate)) {
      setError('Rate must be a number.');
      return;
    }

    onAdd(name, numericRate);
    setName('');
    setRate('');
    setIsOpen(false);
    setError('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        ➕ Add Qualification
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Add Qualification</h3>
            <input
              type="text"
              placeholder="Qualification Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-3 text-sm"
            />
            <input
              type="text"
              placeholder="Rate ($/hr)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-3 text-sm"
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsOpen(false)} className="px-3 py-2 bg-gray-200 rounded text-sm">
                Cancel
              </button>
              <button onClick={handleSubmit} className="px-3 py-2 bg-blue-600 text-white rounded text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
