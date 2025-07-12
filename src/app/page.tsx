import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TeacherProfile from './components/TeacherProfile';
import ScheduleGrid from './components/ScheduleGrid';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-100 min-h-[calc(100vh-64px)] space-y-6">
          <TeacherProfile />
          <ScheduleGrid />
        </main>
      </div>
    </div>
  );
}
