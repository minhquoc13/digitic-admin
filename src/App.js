import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/admin" element={<MainLayout />}></Route>
        <Route element={<DashBoard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
