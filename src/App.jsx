import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Progress from "./pages/progress";

function App() {
  return(
    <Router>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
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
