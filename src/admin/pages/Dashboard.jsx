import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard_component'>
      <div className="container">
        <h2 className='mb-5 pb-2'>DashBoard</h2>
          <div className="row">
              <div className="col-md-3 single_bg">
                <div className="single_dash_item">
                  <h3>Total Category</h3>
                  <p>89</p>
                </div>
              </div>
              <div className="col-md-3 single_bg">
                <div className="single_dash_item">
                  <h3>Total Brand</h3>
                  <p>89</p>
                </div>
              </div>
              <div className="col-md-3 single_bg">
                <div className="single_dash_item ">
                  <h3>Total Products</h3>
                  <p>89</p>
                </div>
              </div>
              <div className="col-md-3 single_bg">
                <div className="single_dash_item">
                  <h3>Total User</h3>
                  <p>89</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
