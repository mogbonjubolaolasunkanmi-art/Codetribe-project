import { Link } from "react-router-dom";
import logo from "../assets/codetribe-logo.jpg";

function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-gray-100 bg-white p-6 md:block">
      {/* Logo */}
      <div className="mb-10 flex items-center ">
        <img
          src={logo}
          alt="CodeTribe"
          className="w-40 h-auto object-contain"
        />
        {/* <h2 className="text-xl font-bold text-gray-800">
          CodeTribe
        </h2> */}
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        <div className="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-600">
          <Link to="/">🏠 Dashboards</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/MyHabits"> ☷ My Habits</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/calender">📅 Calendengitr</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/progress">📊 Progress</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">⚙️ Settings</div>
      </nav>

      {/* Bottom */}
      <div className="mt-[300px] px-4 text-sm text-gray-400">
        ⚙ Help & Support
      </div>
    </aside>
  );
}

export default Sidebar;
