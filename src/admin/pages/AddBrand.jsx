import React, { useState } from 'react'
import useAsync from '../../hooks/useAsync';
import BrandServices from '../../services/BrandServices';
import { toast } from 'react-toastify';
import CategoryServices from '../../services/CategoryServices';
import axios from 'axios';

const AddBrand = () => {
  const { data: cat, isSuccess: catSucc } = useAsync(
    CategoryServices.getCategory
  );
  const [data,setData] = useState({cat_id: '',title: "",description: ''})
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file)
  };

  const handleBrandSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('cat_id', data.cat_id);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', selectedImage);


    try {
      const response = await axios.post('http://localhost:8080/api/subcategories', formData);
      console.log(response.data); // Handle the response data here
    } catch (error) {
      console.error(error); // Handle any errors here
    }
  
    // BrandServices.postSubCategory(formData)
    // .then(res => {
    //   setData({cat_id: '',title: "",description: ''})
    //     setSelectedImage(null)
    //     toast.success("Sub Category Added Successfully")
      
    // })
    // .catch((err)=>{
    //   toast.error(err.message)
    // })


  }

  return (
    <div className='product_add_component'>
        <div className="container">
            <form onSubmit={handleBrandSubmit} className='shadow-lg '>
              <h1>Add SubCategory</h1>
              <div className='input_wrap'>
                <input onChange={(e) => setData((prev)=> ({...prev, title: e.target.value}))} type="text" name="title" id="" placeholder='Title' value={data.title} />
              </div>
              <div className="input_wrap mb-3">
            <select   onChange={(e) => setData((prev)=> ({...prev, cat_id: e.target.value}))} name="category_id" id="">
              <option>Category</option>
              {catSucc &&
                cat.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
            </select>            
          </div>
          <div className='input_wrap'>
            <input onChange={(e) => setData((prev)=> ({...prev, description: e.target.value}))} type="text" name="description" id="" placeholder='description' value={data.description} />
          </div>
              <div className="input_wrap">  
                  <input type="file" name="" id="" onChange={handleImageChange} />
              </div>
              <input className='submit_btn' type="submit" value="Add SubCategory" />
            </form>
        </div>
    </div>
  )
}

export default AddBrand