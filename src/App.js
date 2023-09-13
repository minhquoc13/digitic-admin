import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCateList from "./pages/BlogCateList";
import Orders from "./pages/Order";
import Customers from "./pages/Customer";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="enquiries" element={<Enquiries />}></Route>
          <Route path="blog-list" element={<BlogList />}></Route>
          <Route path="blog-category-list" element={<BlogCateList />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="color-list" element={<ColorList />}></Route>
          <Route path="category-list" element={<CategoryList />}></Route>
          <Route path="add-blog" element={<AddBlog />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
