'use client';
import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
];

type AvailabilitySlot = {
  day: string;
  time: string;
};

export default function ScheduleGrid() {
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([
    { day: 'Tuesday', time: '3:00 PM' },
    { day: 'Thursday', time: '2:00 PM' },
  ]);

  const toggleAvailability = (day: string, time: string) => {
    const exists = availability.some(slot => slot.day === day && slot.time === time);
    if (exists) {
      setAvailability(prev =>
        prev.filter(slot => !(slot.day === day && slot.time === time))
      );
    } else {
      setAvailability(prev => [...prev, { day, time }]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-x-auto mt-6">
      <h2 className="font-semibold text-lg mb-4">Weekly Schedule</h2>
      <div className="grid grid-cols-[100px_repeat(7,minmax(0,1fr))] text-sm border">
        {/* Header row */}
        <div className="bg-gray-100 p-2 border-r font-bold">Time</div>
        {days.map((day) => (
          <div key={day} className="bg-gray-100 p-2 text-center border-r font-bold">{day}</div>
        ))}

        {/* Time slots */}
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            <div className="p-2 border-t font-medium border-r">{time}</div>
            {days.map((day) => {
              const isAvailable = availability.some(slot => slot.day === day && slot.time === time);
              return (
                <div
                  key={`${day}-${time}`}
                  onClick={() => toggleAvailability(day, time)}
                  className={`border-t border-r h-12 flex items-center justify-center cursor-pointer transition-all ${
                    isAvailable
                      ? 'bg-green-200 text-green-800 font-semibold'
                      : 'hover:bg-gray-100'
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
