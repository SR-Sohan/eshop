import React, { useEffect, useState } from 'react';
import img from "../assets/images/products/p1.png"
import Rating from '../components/common/Rating';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import useAsync from '../hooks/useAsync';
import ProductServices from '../services/ProductServices';
import { useParams } from 'react-router-dom';
const imgUrl = import.meta.env.VITE_API_IMG_URL;
const ProductsDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState({})
  useEffect(()=> {
    fetch("http://localhost/react/eshopApi/products.php?id="+id)
    .then( res => res.json())
    .then( data => {
      setProduct(data[0]);
    })
  },[])
  const [quantity,setQuantity] = useState(1);
  

  const handlePlus = () => {
    setQuantity(quantity+1);
  }
  const handleMinus = () => {
    if(quantity >= 2){
      setQuantity(quantity-1);
    }
  }
  const addToCart = (p) => {
    console.log(p);
  }
   return (
    <div className='productDetails_component my-5 py-2'>
      <div className="container">
         <div className="row">
          <div className="col-md-6">
            <div className="product_details_img">
              <img src={`${imgUrl}product/${product.image}`} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product_details_content">
              <h3>{product.title}</h3>
              <h6>Price: ${product.price}</h6>
              <h6>Category: {product.category}</h6>
              <h6>Brand: {product.brand}</h6>
              <Rating/>
              <p>{product.description}</p>
            </div>
            <div className="product_details_quantity">
              <div onClick={handleMinus} className='minus'><AiOutlineMinus/></div>
              <div className='input_value'><input disabled type="number" value={quantity} /></div>
              <div onClick={handlePlus} className='plus'><AiOutlinePlus/></div>
            </div>
            <button onClick={()=>addToCart(product)} className='submit_btn'>Add to Cart</button>
          </div>
        </div>
        
         
      </div>
    </div>
  )
}

export default ProductsDetails