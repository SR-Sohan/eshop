import React from 'react'
import img from "../../assets/images/products/p1.png"
import ProductServices from '../../services/ProductServices';
import { toast } from 'react-toastify';
import useAsync from '../../hooks/useAsync';
const imgUrl = import.meta.env.VITE_API_IMG_URL;
const DashProducts = () => {
  const {data,isSuccess,setData} = useAsync(ProductServices.getProducts);

  const deleteItem = (id) => {
    ProductServices.deleteProduct(id)
    .then( res => {
      if(res){
        setData( data.filter( item => item.id != id))
        toast.success("Product Delete");
      }
       
    })
    .catch((error)=>{
      toast.error(error.message);
    })
  }
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
                {
                  isSuccess && data.map( (item,index) => <tr key={item.id} className='pList'>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td className='list_img'><img src={`${imgUrl}/product/${item.image}`} alt="" /></td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className='list_btn '>Edit</button>
                    <button className='list_btn '>View</button>
                    <button onClick={()=>deleteItem(item.id)} className='list_btn'>Delete</button>
                  </td>
                </tr>)
                }
                
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default DashProducts
