import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddCat from "./pages/AddCat";
import Orders from "./pages/Orders";
import AddBlog from "./pages/AddBlog";
import ViewEnq from "./pages/ViewEnq";
import AddBrand from "./pages/AddBrand";
import BlogList from "./pages/BlogList";
import AddColor from "./pages/AddColor";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import AddCoupon from "./pages/AddCoupon";
import ViewOrder from "./pages/ViewOrder";
import BrandList from "./pages/BrandList";
import AddBlogCat from "./pages/AddBlogCat";
import AddProduct from "./pages/AddProduct";
import CouponList from "./pages/CouponList";
import ProductList from "./pages/ProductList";
import BlogCatList from "./pages/BlogCatList";
import CategoryList from "./pages/CategoryList";
import MainLayout from "./components/MainLayout";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blog" element={<AddBlog />} />
          <Route path="orders" element={<Orders />} />
          <Route path="color" element={<AddColor />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="category" element={<AddCat />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="blog/:id" element={<AddBlog />} />
          <Route path="brand/:id" element={<AddBrand />} />
          <Route path="product" element={<AddProduct />} />
          <Route path="color/:id" element={<AddColor />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="customers" element={<Customers />} />
          <Route path="category/:id" element={<AddCat />} />
          <Route path="order/:id" element={<ViewOrder />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="coupon-list" element={<CouponList />} />
          <Route path="blog-category" element={<AddBlogCat />} />
          <Route path="list-product" element={<ProductList />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="blog-category/:id" element={<AddBlogCat />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
