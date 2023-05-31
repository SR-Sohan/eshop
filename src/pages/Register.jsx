import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/images/icon/i2.svg";
import { createUserWithEmailAndPassword, updateProfile,onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
const Register = () => {
  const [uData, setUData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/")
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth]);
  const [loading, setLoading] = useState(false);
  const inputValue = (e) => {
    setUData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, uData.email, uData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          updateProfile(user, {
            displayName: uData.name,
          });
          toast.success("Registration Success");
          setLoading(false);
          navigate("/login");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };
  return (
    <div className="login_component">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h3 className="text-center">Register</h3>
              {
                loading && <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              }
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
                  name="name"
                  id="fname"
                  placeholder="your name"
                  onChange={inputValue}
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
                  onChange={inputValue}
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
                  onChange={inputValue}
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
