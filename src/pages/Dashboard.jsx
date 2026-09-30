// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import HabitItem from "../components/HabitItem";
import Motivation from "../components/Motivation";

const habits = [
  {
    icon: "💧",
    title: "Drink 8 glasses of water",
    time: "8:00 AM",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "🏋️",
    title: "Exercise for 20 minutes",
    time: "7:00 AM",
    frequency: "Mon, Wed, Fri",
    completed: true,
  },
  {
    icon: "📖",
    title: "Read for 20 minutes",
    time: "8:00 PM",
    frequency: "Daily",
    completed: false,
  },
  {
    icon: "🧘",
    title: "Meditate",
    time: "7:00 AM",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "🍴",
    title: "Eat healthy meals",
    time: "All day",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "📝",
    title: "Journal",
    time: "9:00 PM",
    frequency: "Daily",
    completed: false,
  },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-8">
          {/* Greeting */}
          <section className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Good morning, Alex!
            </h1>

            <p className="mt-2 text-gray-400">
              Here's your progress for today.
            </p>
          </section>

          {/* Statistics */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-8">
            <StatCard
              title="Today's Progress"
              value="4 of 6 habits completed"
              percentage="67%"
            />

            <StatCard title="🔥 Current Streak" value="12 days" />

            <StatCard title="🏆 Best Streak" value="28 days" />
          </section>

          {/* Habits */}
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Today's Habits
                </h2>

                <p className="text-sm text-gray-400">6 habits • 4 completed</p>
              </div>

              <button className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white hover:bg-emerald-600">
                + Add Habit
              </button>
            </div>

            <div>
              {habits.map((habit, index) => (
                <HabitItem key={index} habit={habit} />
              ))}
            </div>
          </section>

          {/* Motivation */}
          <Motivation />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
