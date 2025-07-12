// src/components/Header.tsx
'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Teacher Management</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">📍 Richmond Hill</span>
        <div className="w-9 h-9 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
