import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import "./index.css";

function Progress() {
 
  const [weeklyData, setWeeklyData] = useState([
    { day: "Mon", value: 55 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 75 },
    { day: "Thu", value: 78 },
    { day: "Fri", value: 58 },
    { day: "Sat", value: 62 },
    { day: "Sun", value: 48 },
  ]);

  const habits = [
    { name: "Water", percentage: 94, icon: "💧" },
    { name: "Reading", percentage: 86, icon: "📖" },
    { name: "Exercise", percentage: 79, icon: "🏃" },
    { name: "Meditation", percentage: 62, icon: "🧘" },
    { name: "Nutrition", percentage: 58, icon: "🍎" },
  ];

  // Increase the value of a selected day
  const increaseDay = (index) => {
    setWeeklyData((previousData) =>
      previousData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            value: Math.min(item.value + 5, 100),
          };
        }
        return item;
      }),
    );
  };

  return (
    // 💡 REMOVED: The outer "dashboard" div and the static <aside> sidebar
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <div className="p-8">
            {/* PAGE TITLE */}
            <section className="page-heading">
              <h1>Progress</h1>
              <p>See how far you've come and what to improve.</p>
            </section>

            {/* STAT CARDS */}
            <section className="stats">
              {/* COMPLETION */}
              <div className="stat-card completion-card">
                <div>
                  <p>Overall Completion</p>
                  <h2>78%</h2>
                  <div className="progress-line">
                    <div></div>
                  </div>
                </div>
                <div className="progress-circle">
                  <div className="circle-inner">78%</div>
                </div>
              </div>

              {/* CURRENT STREAK */}
              <div className="stat-card">
                <div className="stat-icon fire">🔥</div>
                <div>
                  <p>Current Streak</p>
                  <h2>12 days</h2>
                </div>
              </div>

              {/* LONGEST STREAK */}
              <div className="stat-card">
                <div className="stat-icon trophy">🏆</div>
                <div>
                  <p>Longest Streak</p>
                  <h2>28 days</h2>
                </div>
              </div>
            </section>

            {/* WEEKLY COMPLETION */}
            <section className="dashboard-card weekly-card">
              <div className="section-heading">
                <h2>Weekly Completion</h2>
                <strong>78%</strong>
              </div>
              <div className="bar-chart">
                {weeklyData.map((item, index) => (
                  <div
                    className="bar-column"
                    key={item.day}
                    onClick={() => increaseDay(index)}
                  >
                    <div className="bar-wrapper">
                      <div
                        className={`bar ${index >= 4 ? "green-bar" : ""}`}
                        style={{ height: `${item.value}%` }}
                      >
                        <span className="bar-value">{item.value}%</span>
                      </div>
                    </div>
                    <span className="day">{item.day}</span>
                  </div>
                ))}
              </div>
              <p className="chart-hint">
                Click a bar to increase its progress.
              </p>
            </section>

            {/* MONTHLY COMPLETION */}
            <section className="dashboard-card monthly-card">
              <div className="section-heading">
                <h2>Monthly Completion</h2>
                <div className="monthly-number">
                  <strong>78%</strong>
                  <span>This month</span>
                </div>
              </div>
              <div className="line-chart">
                <div className="guide guide-1"></div>
                <div className="guide guide-2"></div>
                <div className="guide guide-3"></div>
                <svg viewBox="0 0 800 220" preserveAspectRatio="none">
                  <polyline
                    points="30,145 140,155 250,110 350,130 450,95 550,75 650,105 770,65"
                    fill="none"
                    stroke="#18b779"
                    strokeWidth="4"
                  />
                  <circle cx="30" cy="145" r="5" />
                  <circle cx="140" cy="155" r="5" />
                  <circle cx="250" cy="110" r="5" />
                  <circle cx="350" cy="130" r="5" />
                  <circle cx="450" cy="95" r="5" />
                  <circle cx="550" cy="75" r="5" />
                  <circle cx="650" cy="105" r="5" />
                  <circle cx="770" cy="65" r="5" />
                </svg>
                <div className="months">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
              </div>
            </section>

            {/* BOTTOM SECTION */}
            <section className="bottom-section">
              {/* BEST HABITS */}
              <div className="dashboard-card best-habits">
                <div className="section-heading">
                  <h2>Best Habits</h2>
                </div>
                <div className="habit-list">
                  {habits.map((habit) => (
                    <div className="habit-row" key={habit.name}>
                      <div className="habit-left">
                        <span className="habit-icon">{habit.icon}</span>
                        <span>{habit.name}</span>
                      </div>
                      <strong>{habit.percentage}%</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* INSIGHTS */}
              <div className="dashboard-card insights">
                <h2>Insights</h2>
                <div className="insight">
                  <span>↗</span>
                  <p>
                    Your consistency increased by 14% this week compared to last
                    week!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Progress;
