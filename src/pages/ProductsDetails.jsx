import React, { useEffect, useState } from 'react';
import Rating from '../components/common/Rating';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useParams } from 'react-router-dom';
const imgUrl = import.meta.env.VITE_API_IMG_URL;
import { useCartContext } from '../cart/CartProvider';
const ProductsDetails = () => {
  const { addToCart } = useCartContext();
  const {id} = useParams();
  const [product,setProduct] = useState({})
  useEffect(()=> {
    fetch(`http://localhost:8080/api/products/${id}`)
    .then( res => res.json())
    .then( data => {
      setProduct(data);
      
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

   return (
    <div className='productDetails_component my-5 py-2'>
      <div className="container">
         <div className="row">
          <div className="col-md-6">
            <div className="product_details_img">
              <img className='img-fluid' src={`${product && product.image}`} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product_details_content">
              <h3>{product && product.title}</h3>
              <h6>Price: ${ product && product.price}</h6>
              <Rating/>
              <p>{ product && product.description}</p>
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