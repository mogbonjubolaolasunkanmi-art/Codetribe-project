
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Progress from "./pages/progress";
import MyHabits from "./pages/myhabits/MyHabits";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Onboarding from './Onboarding'
import HabitDetails from './Calender'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* <Sidebar /> */}
        <main className="flex-1">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/MyHabits" element={<MyHabits />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/HabitDetails" element={<HabitDetails />} />

            {/* Add matching components for /habits, /calendar, /settings here as you build them out */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

