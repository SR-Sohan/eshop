import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


const AppRouting = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="products" element={<Products/>} />
                    <Route path="products/:id" element={<ProductsDetails/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="cart" element={<Cart/>} />
                    <Route path="*"  element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;