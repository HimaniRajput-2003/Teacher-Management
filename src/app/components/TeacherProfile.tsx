'use client';
import React, { useState } from 'react';
import AddQualificationModal from './AddQualificationModal';
import toast from 'react-hot-toast';

export default function TeacherProfile() {
  const [teacher, setTeacher] = useState({
    name: 'Himani',
    role: 'Teacher',
    birthDate: '2003-07-03',
    email: 'himani@gmail.com',
    phone: '9542525255',
    address: 'Malviya Nagar, Gorakhpur',
    qualifications: [
      { name: 'Vocal Contemporary', rate: 28 },
      { name: 'Vocal Core', rate: 28 },
      { name: 'Vocal Intro', rate: 28 },
      { name: 'Vocal Plus', rate: 28 },
      { name: 'Instrument', rate: 28 },
    ],
  });

  const handleAddQualification = (name: string, rate: number) => {
    const updatedQualifications = [...teacher.qualifications, { name, rate }];
    setTeacher({ ...teacher, qualifications: updatedQualifications });
    toast.success('Qualification added successfully!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Basic Details */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Details</h2>
        <p className="mb-1"><strong>Name:</strong> {teacher.name}</p>
        <p className="mb-1"><strong>Role:</strong> {teacher.role}</p>
        <p className="mb-1"><strong>Birth Date:</strong> {teacher.birthDate}</p>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-4">Contact</h2>
        <p className="mb-1"><strong>Email:</strong> {teacher.email}</p>
        <p className="mb-1"><strong>Phone:</strong> {teacher.phone}</p>
        <p className="mb-1"><strong>Address:</strong> {teacher.address}</p>
      </div>

      {/* Qualifications */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Private Qualifications</h2>
          <AddQualificationModal onAdd={handleAddQualification} />
        </div>

        {teacher.qualifications.length === 0 ? (
          <p className="text-gray-500">No qualifications added yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 font-medium">Name</th>
                <th className="py-2 font-medium">Rate ($/hr)</th>
              </tr>
            </thead>
            <tbody>
              {teacher.qualifications.map((q, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2">{q.name}</td>
                  <td className="py-2">${q.rate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
