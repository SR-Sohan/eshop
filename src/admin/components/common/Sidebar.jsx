import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineDashboard } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
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
          <FaProductHunt />
          <div class="btn-group dropend">
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul class="dropdown-menu">
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
