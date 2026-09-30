import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import MyHabits from "./pages/myhabits/MyHabits";
// import { Sidebar } from "lucide-react";
=======
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
>>>>>>> dcdaa40c392be639dcece98a3bb80099bb29ad8b

import Dashboard from "./pages/Dashboard";
import Progress from "./pages/progress";

function App() {
  return(
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* <Sidebar /> */}
        <main className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            {/* Add matching components for /habits, /calendar, /settings here as you build them out */}
          </Routes>
        </main>
      </div>
    </Router>
    
  ) 
}

export default App;
