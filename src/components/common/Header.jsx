import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header className="header_component">
      <div className="header_top">
        <div className="container">
          <div className="header_bottom_wrap text-white">
            <div className="phone_area">
              <FiPhoneCall />
              <span>+8801302460356</span>
            </div>
            <div className="offer_area">
              <span>Get 50% Off on Selected Items</span>
              <span>Shop Now</span>
            </div>
            <div className="language_area">
              <select name="" id="">
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
                <option value="bangla">Hindi</option>
              </select>
              <select name="" id="">
                <option value="location">Location</option>
                <option value="dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
                <option value="rajshai">Rajshai</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom py-3">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="header_account d-flex align-items-center">
                <Link to="/cart" className="cart_icon">
                  <BsCart4 />
                  <p>
                    <span>22</span>
                  </p>
                </Link>
                <Link className="sing_btn" to="/login">Sign In</Link>
                <div className="dropdown ms-3">
                  <button
                    className="btn btn-primary dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Sohanur Rahman
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/logout">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
