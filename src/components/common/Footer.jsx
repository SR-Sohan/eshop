import React from "react";
import logo from "../../assets/images/logo.svg";
import stripe from "../../assets/images/stripe.png";
import amazon from "../../assets/images/amazon.png";
import gpay from "../../assets/images/gpay.png";
import klarna from "../../assets/images/klarna.png";
import master from "../../assets/images/master.png";
import pay from "../../assets/images/pay.png";
import paypal from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";

import { BsBriefcase } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer_component">
      <div className="container">
        <div className="footer_wrap pt-5 pb-3">
          <div className="top_footer">
            <div className="row">
              <div className="col-lg-5">
                <div className="footer_item shop_cart">
                  <img src={logo} alt="" />
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                  <div className="payment_method">
                    <div className="payment_item">
                      <img src={stripe} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={visa} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={master} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={amazon} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={klarna} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={paypal} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={pay} alt="" />
                    </div>
                    <div className="payment_item">
                      <img src={gpay} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1">
                <div className="footer_item">
                  <h3>About Us</h3>
                  <ul>
                    <li>
                      <a href="#">About Shopcart</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">News & Blog</a>
                    </li>
                    <li>
                      <a href="#">Press Center</a>
                    </li>
                    <li>
                      <a href="#">Shop By Location</a>
                    </li>
                    <li>
                      <a href="#">Shopcart Brands</a>
                    </li>
                    <li>
                      <a href="#">Affiliate & Partners</a>
                    </li>
                    <li>
                      <a href="#">Ideas & Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer_item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#"> Gift Card</a>
                    </li>
                    <li>
                      <a href="#">Mobile App</a>
                    </li>
                    <li>
                      <a href="#">News & Blog</a>
                    </li>
                    <li>
                      <a href="#">Shipping & Delivery</a>
                    </li>
                    <li>
                      <a href="#">Order Pickup</a>
                    </li>
                    <li>
                      <a href="#">Account Signup</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer_item">
                  <h3>Help</h3>
                  <ul>
                    <li>
                      <a href="#">Shopcart Help</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Track Orders</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Security & Fraud</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-icon">
                  <div className="f_icon_item">
                    <BsBriefcase />
                    <span>Become Seller</span>
                  </div>
                  <div className="f_icon_item">
                    <GoGift />
                    <span>Gift Cards</span>
                  </div>
                  <div className="f_icon_item">
                    <BiHelpCircle />
                    <span>Help Center</span>
                  </div>
                </div>
              </div>
              <div className="col-md-7 offset-md-1">
                <div className="terms_area">
                  <ul>
                    <li>
                      <a href="#"> Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Privacy & Policy</a>
                    </li>
                  </ul>
                  <p>All Right reserved by Sohanur Rahman | 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
