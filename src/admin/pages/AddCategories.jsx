import React from 'react'

const AddCategories = () => {
  return (
    <div className='product_add_component'>
    <div className="container">
        <form className='shadow-lg '>
          <h1>Add Category</h1>
          <div className='input_wrap'>
            <input type="text" name="title" id="" placeholder='Title' />
          </div>
          <div className="input_wrap">
              <input type="file" name="" id="" />
          </div>
          <input className='submit_btn' type="submit" value="Add Category" />
        </form>
    </div>
</div>
  )
}

export default AddCategories