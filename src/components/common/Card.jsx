import React from 'react'
import img1 from '../../assets/images/products/p1.png';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Card = ({col}) => {
    let colClass = `col-lg-${col}`;
  return (
    <div className={colClass}>
      <div className="product_card">
        <div className="product_img">
            <img src={img1} alt="" />
        </div>
        <div className="product_content">
            <div className="product_title d-flex align-items-center justify-content-between">
                <h4>Laptop sleeve MacBook</h4>
                <p>$59</p>
            </div>
            <p>Organic Cotton, fairtrade certified</p>
            <Rating/>
            <Link className='submit_btn' to={`/products/${2}`}>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
