// src/components/TeacherProfile.tsx
'use client';
import React from 'react';

const teacher = {
  name: 'Alynia Allan',
  role: 'Teacher',
  birthDate: '1984-07-12',
  email: 'alyniaallan@example.com',
  phone: '416-848-9057',
  address: '56 Osbourne Da Santos Cir, North York, Ontario, Canada',
  qualifications: [
    { name: 'Vocal Contemporary', rate: 28 },
    { name: 'Vocal Core', rate: 28 },
    { name: 'Vocal Intro', rate: 28 },
    { name: 'Vocal Plus', rate: 28 },
    { name: 'Instrument', rate: 28 },
  ],
};

export default function TeacherProfile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Basic Details */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Details</h2>
        <p><strong>Name:</strong> {teacher.name}</p>
        <p><strong>Role:</strong> {teacher.role}</p>
        <p><strong>Birth Date:</strong> {teacher.birthDate}</p>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Contact</h2>
        <p><strong>Email:</strong> {teacher.email}</p>
        <p><strong>Phone:</strong> {teacher.phone}</p>
        <p><strong>Address:</strong> {teacher.address}</p>
      </div>

      {/* Qualifications */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Private Qualifications</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b py-2">Name</th>
              <th className="border-b py-2">Rate ($/hr)</th>
            </tr>
          </thead>
          <tbody>
            {teacher.qualifications.map((q, idx) => (
              <tr key={idx}>
                <td className="py-2 border-b">{q.name}</td>
                <td className="py-2 border-b">${q.rate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
