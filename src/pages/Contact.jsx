import React from 'react';
import img from "../assets/images/contact.svg"

const Contact = () => {
  return (
    <div className="login_component">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="form_img">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <h3 className="text-center">Contact With Our</h3>
             
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
              <input className="submit_btn" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact