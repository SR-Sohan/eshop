import React from 'react'

const AddBrand = () => {
  return (
    <div className='product_add_component'>
        <div className="container">
            <form className='shadow-lg '>
              <h1>Add Brand</h1>
              <div className='input_wrap'>
                <input type="text" name="title" id="" placeholder='Title' />
              </div>
              <div className="input_wrap">
                  <input type="file" name="" id="" />
              </div>
              <input className='submit_btn' type="submit" value="Add Brand" />
            </form>
        </div>
    </div>
  )
}

export default AddBrand