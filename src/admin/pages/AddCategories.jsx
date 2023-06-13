import React, { useState } from 'react'
import CategoryServices from '../../services/CategoryServices';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCategories = () => {
  const [data,setData] = useState({title: "",description: ''})
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', selectedImage);    

   
    CategoryServices.postCategory(formData)
    .then(res => {
      setData({title: "",description: ''})
        setSelectedImage(null)
        toast.success("Category Added Successfully")      
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  return (
    <div className='product_add_component'>
    <div className="container">
        <form onSubmit={handleSubmit} className='shadow-lg '>
          <h1>Add Category</h1>
          <div className='input_wrap'>
            <input onChange={(e) => setData((prev)=> ({...prev, title: e.target.value}))} type="text" name="title" id="" placeholder='Title' value={data.title} />
          </div>
          <div className='input_wrap'>
            <input onChange={(e) => setData((prev)=> ({...prev, description: e.target.value}))} type="text" name="description" id="" placeholder='description' value={data.description} />
          </div>
          <div className="input_wrap">
              <input onChange={handleImageChange} type="file" name="" id="" />
          </div>
          <input className='submit_btn' type="submit" value="Add Category" />
        </form>
    </div>
</div>
  )
}

export default AddCategories