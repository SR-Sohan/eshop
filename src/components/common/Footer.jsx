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

const Footer = () => {
  return (
    <footer className="footer_component">
      <div className="container">
        <div className="footer_wrap pt-5 pb-3">
          <div className="top_footer">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer_item shop_cart">
                  <img src={logo} alt="" />
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
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
              <div className="col-lg-3">
                <div className="footer_item">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer_item">

                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer_item">

                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
