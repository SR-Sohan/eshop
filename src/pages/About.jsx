import React from "react";
import img from "../assets/images/about.svg";

const About = () => {
  return (
    <div className="about_component my-5">
      <div className="container">
        <div className="about_banner">
          <h2>About Page</h2>
        </div>
        <div className="row py-5 my-5">
          <div className="col-md-5">
            <div className="about_img text-center">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita cum molestias iste velit quam eius et magni deserunt
                doloremque error, commodi rem vitae totam, at dolorem,
                temporibus sit perferendis ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita cum molestias iste velit quam eius et magni deserunt
                doloremque error, commodi rem vitae totam, at dolorem,
                temporibus sit perferendis ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita cum molestias iste velit quam eius et magni deserunt
                doloremque error, commodi rem vitae totam, at dolorem,
                temporibus sit perferendis ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
