import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login_component'>
      <div className="container ">
        <form className='shadow-lg'>
          <h3 className='text-center'>Login</h3>
          <hr />
            <div className="form_input_wrap">
              <label className='label' htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder='write your email...' />
            </div>
            <div className="form_input_wrap">
              <label className='label' htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" placeholder='write your password...' />
            </div>
            <input className='submit_btn' type="submit" value="Sign In" />
            <p>Don't you have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login