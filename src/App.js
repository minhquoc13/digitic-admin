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
import AddBlogCat from "./pages/AddBlogCat";
import AddColor from "./pages/AddColor";
import AddCat from "./pages/AddCat";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import BrandList from "./pages/BrandList";
import AddBrand from "./pages/AddBrand";

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
          <Route path="add-blog" element={<AddBlog />}></Route>
          <Route path="blog-category" element={<AddBlogCat />}></Route>
          <Route path="color" element={<AddColor />}></Route>
          <Route path="color-list" element={<ColorList />}></Route>
          <Route path="category-list" element={<CategoryList />}></Route>
          <Route path="category" element={<AddCat />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="product" element={<AddProduct />}></Route>
          <Route path="product-list" element={<ProductList />}></Route>
          <Route path="brand-list" element={<BrandList />}></Route>
          <Route path="brand" element={<AddBrand />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
