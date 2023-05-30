import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/common/Sidebar'
import Header from './components/common/Header'

const DashLayout = () => {
  return (
    <div className='dashboard_component'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashLayout
