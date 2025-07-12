'use client';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TeacherProfile from './components/TeacherProfile';
import ScheduleGrid from './components/ScheduleGrid';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar on left */}
      <Sidebar />

      {/* Main content on right */}
      <div className="flex-1 flex flex-col md:ml-60">
        {/* Top Header */}
        <Header />

        {/* Main page content */}
        <main className="p-6 space-y-6">
          <TeacherProfile />
          <ScheduleGrid />
        </main>
      </div>
    </div>
  );
}
