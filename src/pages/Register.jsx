import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/images/icon/i2.svg"

const Register = () => {
  return (
    <div className="login_component">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <form>
              <h3 className="text-center">Register</h3>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <hr />
              <div className="form_input_wrap">
                <label className="label" htmlFor="fname">
                  Name:
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="your name"
                />
              </div>
              <div className="form_input_wrap">
                <label className="label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="form_input_wrap">
                <label className="label" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <input className="submit_btn" type="submit" value="Sign Up" />
            </form>
          </div>
          <div className="col-md-6">
          <div className="form_img">
              <img className="img-fluid" src={login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
