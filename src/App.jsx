import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar"; // Ready to go
// import Header from "./components/Header";   // Ready to go

import Dashboard from "./pages/Dashboard";
import Progress from "./pages/progress";
import MyHabits from "./pages/myhabits/MyHabits";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Calender from "./pages/Calender";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* <Sidebar /> Persists on the left side */}
        <main className="flex-1">
          {/* <Header /> Persists at the top right */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
    
            <Route path="/myhabits" element={<MyHabits />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
