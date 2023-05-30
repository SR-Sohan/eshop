import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/images/icon/i3.svg"

const Login = () => {
  return (
    <div className="login_component">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="form_img">
              <img className="img-fluid" src={login} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <h3 className="text-center">Login</h3>
              <p>
                Don't have an account? <Link to="/register">Create here</Link>
              </p>
              <hr />
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
              <input className="submit_btn" type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
