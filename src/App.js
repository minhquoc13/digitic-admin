import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reset-password" element={<Resetpassword />}></Route>
        <Route path="/forgot-password" element={<Forgotpassword />}></Route>
        <Route path="/admin" element={<MainLayout />}></Route>
        <Route element={<DashBoard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
