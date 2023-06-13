import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
const imgUrl = import.meta.env.VITE_API_IMG_URL;

const Card = ({col,product}) => {
    let colClass = `col-lg-${col}`;
  return (
    <div className={colClass}>
      <div className="product_card">
        <div className="product_img">
            <img src={`${product.image}`} alt="" />
        </div>
        <div className="product_content">
            <div className="product_title d-flex align-items-center justify-content-between">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
            </div>
            <p>{product.description}</p>
            <Rating/>
            <Link className='submit_btn' to={`/products/${product.id}`}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
