import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineDashboard } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { TbBrand4Chan,TbCategory } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="sidebar_component">
      <div className="sidebar_logo text-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="sidebar_nav mt-4">
        <div className="sidebar_item">
          <AiOutlineHome />
          <Link to="/">Back to Home</Link>
        </div>
        <div className="sidebar_item">
          <AiOutlineDashboard />
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="sidebar_item">
          <TbBrand4Chan />
          <div className="btn-group dropend">
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Sub-ategories
            </button>
            <ul className="dropdown-menu">
                <li><Link to="brands">SubCategories</Link></li>
                <li><Link to="add-brand">Add SubCategories</Link></li>
            </ul>
          </div>
        </div>
        <div className="sidebar_item">
          <TbCategory />
          <div className="btn-group dropend">
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
                <li><Link to="categories">Categories</Link></li>
                <li><Link to="add-categories">Add Categories</Link></li>
            </ul>
          </div>
        </div>
        <div className="sidebar_item">
          <FaProductHunt />
          <div className="btn-group dropend">
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul className="dropdown-menu">
                <li><Link to="products">Products</Link></li>
                <li><Link to="add-product">Add Product</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
