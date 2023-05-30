import React from 'react'
import img from "../../assets/images/products/p1.png"

const DashProducts = () => {
  return (
    <div className='dash_product_component'>
      <div className="container">
        <h2 className='mb-5 pb-5'>Product List</h2>
          <table className='table table-success table-striped'>
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='pList'>
                  <td>1</td>
                  <td>Apple phone</td>
                  <td className='list_img'><img src={img} alt="" /></td>
                  <td>Apple</td>
                  <td>Electronics</td>
                  <td>$890</td>
                  <td>
                    <button className='list_btn '>Edit</button>
                    <button className='list_btn '>View</button>
                    <button className='list_btn'>Delete</button>
                  </td>
                </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default DashProducts
