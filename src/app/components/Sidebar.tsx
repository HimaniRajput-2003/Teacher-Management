// src/components/Sidebar.tsx
'use client';
import React from 'react';
import { Home, Users, Calendar, Settings } from 'lucide-react';

const navItems = [
  { icon: <Home size={18} />, label: 'Dashboard' },
  { icon: <Users size={18} />, label: 'Teachers' },
  { icon: <Calendar size={18} />, label: 'Schedule' },
  { icon: <Settings size={18} />, label: 'Settings' }
];

export default function Sidebar() {
  return (
   <aside className="h-screen w-60 bg-gray-900 text-white p-5 hidden md:block fixed top-0 left-0">

      <h2 className="text-xl font-bold mb-8">MySchool</h2>
      <ul className="space-y-5">
        {navItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
