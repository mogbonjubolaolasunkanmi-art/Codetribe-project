import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import MyHabits from "./pages/myhabits/MyHabits";
// import { Sidebar } from "lucide-react";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* <Sidebar /> */}
        <main className="flex-1">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<MyHabits />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        {/* <SignUp />
      <Login />
      */}
      </div>
    </Router>
  );
};
export default App;
