import React from 'react'

const AddProducts = () => {
  return (
    <div className='product_add_component'>
        <div className="container">
            <form className='shadow-lg '>
              <h1>Add Product</h1>
              <div className='input_wrap'>
                <input type="text" name="title" id="" placeholder='Title' />
              </div>
              <div className='input_wrap'>
                <input type="number" name="title" id="" placeholder='Price' />
              </div>
              <div className='input_wrap'>
                <select name="" id="">
                  <option selected>Category</option>
                  <option value="cat1">Cat1</option>
                  <option value="cat1">Cat2</option>
                  <option value="cat1">Cat3</option>
                  <option value="cat1">Cat4</option>
                  <option value="cat1">Cat5</option>
                </select>
              </div>
              <div className='input_wrap'>
                <select name="" id="">
                  <option selected>Brand</option>
                  <option value="cat1">Cat1</option>
                  <option value="cat1">Cat2</option>
                  <option value="cat1">Cat3</option>
                  <option value="cat1">Cat4</option>
                  <option value="cat1">Cat5</option>
                </select>
              </div>
              <div className="input_wrap">
                  <input type="number" name="quantity" id="" placeholder='Qunatity' />
              </div>
              <div className="input_wrap">
                  <textarea rows="5" type="text" name="quantity" id="" placeholder='Description'></textarea>
              </div>
              <div className="input_wrap">
                  <input type="file" name="" id="" />
              </div>
              <input className='submit_btn' type="submit" value="Add Product" />
            </form>
        </div>
    </div>
  )
}

export default AddProducts
