import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Suspense, lazy } from "react";
import Loading from "./components/others/Loading";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductsDetails = lazy(() => import("./pages/ProductsDetails"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Cart = lazy(() => import("./pages/Cart"));
const DashLayout = lazy(() => import("./admin/DashLayout"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const DashProducts = lazy(() => import("./admin/pages/DashProducts"));
const AddProducts = lazy(() => import("./admin/pages/AddProducts"));
const Brand = lazy(() => import("./admin/pages/Brand"));
const Categories = lazy(() => import("./admin/pages/Categories"));
const AddBrand = lazy(() => import("./admin/pages/AddBrand"));
const AddCategories = lazy(() => import("./admin/pages/AddCategories"));



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
              <Route path="brands" element={<Brand/>} />
              <Route path="categories" element={<Categories/>} />
              <Route path="add-product" element={<AddProducts/>} />
              <Route path="add-brand" element={<AddBrand/>} />
              <Route path="add-categories" element={<AddCategories/>} />
              <Route path="update-product/:id" element={<AddProducts/>} />
              <Route path="update-brand/:id" element={<AddBrand/>} />
              <Route path="update-categories/:id" element={<AddCategories/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouting;
