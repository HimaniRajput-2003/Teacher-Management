// src/components/ScheduleGrid.tsx
'use client';
import React from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
];

const availability = [
  { day: 'Tuesday', time: '3:00 PM' },
  { day: 'Thursday', time: '2:00 PM' },
];

export default function ScheduleGrid() {
  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto mt-6">
      <h2 className="font-semibold text-lg mb-4">Weekly Schedule</h2>
      <div className="grid grid-cols-[100px_repeat(7,minmax(0,1fr))] text-sm border">
        <div className="bg-gray-100 p-2 border-r font-bold">Time</div>
        {days.map((day) => (
          <div key={day} className="bg-gray-100 p-2 text-center border-r font-bold">{day}</div>
        ))}
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            <div className="p-2 border-t font-medium border-r">{time}</div>
            {days.map((day) => {
              const isAvailable = availability.find(slot => slot.day === day && slot.time === time);
              return (
                <div
                  key={day + time}
                  className={`border-t border-r h-12 flex items-center justify-center ${
                    isAvailable ? 'bg-green-200 text-green-800 font-semibold' : ''
                  }`}
                >
                  {isAvailable ? 'Available' : ''}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
