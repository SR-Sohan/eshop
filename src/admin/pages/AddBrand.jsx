import React, { useState } from 'react'
import useAsync from '../../hooks/useAsync';
import BrandServices from '../../services/BrandServices';
import { toast } from 'react-toastify';

const AddBrand = () => {
  const [title,setTitle] = useState({title: ""})
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file)
  };

  const handleBrandSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title.title);
    formData.append('image', selectedImage);

    BrandServices.postBrand(formData)
    .then(res => {
        setTitle({title: ""})
        setSelectedImage(null)
        toast.success("Brand Added Successfully")
      
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  return (
    <div className='product_add_component'>
        <div className="container">
            <form onSubmit={handleBrandSubmit} className='shadow-lg '>
              <h1>Add Brand</h1>
              <div className='input_wrap'>
                <input onChange={(e) => setTitle((prev)=> ({...prev, title: e.target.value}))} type="text" name="title" id="" placeholder='Title' value={title.title} />
              </div>
              <div className="input_wrap">
                  <input type="file" name="" id="" onChange={handleImageChange} />
              </div>
              <input className='submit_btn' type="submit" value="Add Brand" />
            </form>
        </div>
    </div>
  )
}

export default AddBrand