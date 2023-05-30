import React, { useState } from 'react';
import img from "../assets/images/products/p1.png"
import Rating from '../components/common/Rating';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

const ProductsDetails = () => {
  const [quantity,setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity+1);
  }
  const handleMinus = () => {
    if(quantity >= 2){
      setQuantity(quantity-1);
    }
  }
  return (
    <div className='productDetails_component my-5 py-2'>
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product_details_img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="product_details_content">
                <h3>Laptop sleeve MacBook</h3>
                <h6>Price: $59</h6>
                <h6>Category: Vegetables</h6>
                <h6>Brand: Apple</h6>
                <Rating/>
                <p>Organic Cotton, fairtrade certified</p>
              </div>
              <div className="product_details_quantity">
                <div onClick={handleMinus} className='minus'><AiOutlineMinus/></div>
                <div className='input_value'><input disabled type="number" value={quantity} /></div>
                <div onClick={handlePlus} className='plus'><AiOutlinePlus/></div>
              </div>
              <button className='submit_btn'>Add to Cart</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductsDetails