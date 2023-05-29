import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login_component'>
      <div className="container ">
        <form className='shadow-lg'>
          <h3 className='text-center'>Register</h3>
          <hr />
            <div className="form_input_wrap">
              <label className='label' htmlFor="fname">First Name:</label>
              <input type="text" name="fname" id="fname" placeholder='write your first name...' />
            </div>
            <div className="form_input_wrap">
              <label className='label' htmlFor="lname">Last Name:</label>
              <input type="text" name="lname" id="lname" placeholder='write your first name...' />
            </div>
            <div className="form_input_wrap">
              <label className='label' htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder='write your email...' />
            </div>
            <div className="form_input_wrap">
              <label className='label' htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" placeholder='write your password...' />
            </div>
            <input className='submit_btn' type="submit" value="Sign Up" />
            <p>Do you have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register