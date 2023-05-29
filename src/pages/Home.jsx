import React, { useEffect, useState } from "react";
import ProductServices from "../services/ProductServices";
import useAsync from "../hooks/useAsync";
import { Link } from "react-router-dom";
import cart1 from "../assets/images/category/cat1.png"
import cart2 from "../assets/images/category/cat2.png"
import cart3 from "../assets/images/category/cat3.png"
import cart4 from "../assets/images/category/cat4.png"
import cart5 from "../assets/images/category/cat5.png"
import cart6 from "../assets/images/category/cat6.png"
import Product from "../components/home/Product";

const Home = () => {
  const { data, isLoading } = useAsync(ProductServices.getProducts);

  console.log(data);

  return (
    <>
      {/* banner area start  */}
      <div className="banner_area">
        <div className="container">
          <div className="banner_content">
            <h1>
              Shopping And <br />
              Department Store.
            </h1>
            <p>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </p>
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
      {/* banner area end  */}

      {/* categories area start  */}
      <div className="category_area py-5">
        <div className="container">
          <h3 className="pb-4">Shop Our Top Categories</h3>
          <div className="row g-3">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart1} alt="" />
                  <h4>Furniture</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart2} alt="" />
                  <h4>Hand Bag</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart3} alt="" />
                  <h4>Books</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart4} alt="" />
                  <h4>Tech</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart5} alt="" />
                  <h4>Sneakers</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="category_item">
                  <img src={cart6} alt="" />
                  <h4>Travel</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* categories area end  */}

      {/* products area start  */}
      <Product/>
      {/* products area end */}
    </>
  );
};

export default Home;
