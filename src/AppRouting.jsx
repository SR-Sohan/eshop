import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Suspense, lazy } from "react";
import Loading from "./components/others/Loading";
import DashLayout from "./admin/DashLayout";
import Dashboard from "./admin/pages/Dashboard";
import DashProducts from "./admin/pages/DashProducts";
import AddProducts from "./admin/pages/AddProducts";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductsDetails = lazy(() => import("./pages/ProductsDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Cart = lazy(() => import("./pages/Cart"));


const AppRouting = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductsDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="dashboard" element={<DashLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path="products" element={<DashProducts/>} />
              <Route path="add-product" element={<AddProducts/>} />
              <Route path="update-product/:id" element={<AddProducts/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouting;
