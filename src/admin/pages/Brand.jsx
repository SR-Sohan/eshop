import React from 'react'
import useAsync from '../../hooks/useAsync'
import BrandServices from '../../services/BrandServices';
import { toast } from 'react-toastify';
const imgUrl = import.meta.env.VITE_API_IMG_URL;
const Brand = () => {

  const {data,isSuccess,setData} = useAsync(BrandServices.getBrands);
  
  const deleteBrand = (id) => {
    BrandServices.deleteBrand(id)
    .then( res => {
      if(res){
        setData( data.filter( item => item.id != id))
        toast.success("Brand Delete");
      }
       
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }
  return (
    <div className='dash_product_component'>
    <div className="container">
      <h2 className='mb-5 pb-5'>Brand List</h2>
        <table className='table table-success table-striped'>
            <thead>
              <tr>
                <th>Sl</th>
                <th>Title</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                isSuccess && data.map( (item,index) =>  <tr key={item.id} className='pList'>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td className='list_img'><img src={`${imgUrl}/brand/${item.image}`} alt="" /></td>
                <td>
                  <button className='list_btn '>Edit</button>
                  <button className='list_btn '>View</button>
                  <button onClick={()=>deleteBrand(item.id)} className='list_btn'>Delete</button>
                </td>
              </tr>)
              }
            

            </tbody>
        </table>
    </div>
  </div>
  )
}

export default Brand