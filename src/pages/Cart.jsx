import React, { useState } from "react";
import img from "../assets/images/products/p1.png";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useCartContext } from '../cart/CartProvider';
const imgUrl = import.meta.env.VITE_API_IMG_URL;

const Cart = () => {

  const { cartState,addToCart ,removeFromCart,quantityMinus} = useCartContext();

  const price = []
  const total = () => {
    cartState.items.map( item => price.push(item.price * item.quantity))
  }
  total();

  return (
    <div className="cart_component my-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="cart_item_wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Qunatity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartState.items.map( item => <tr key={item.id} className="cart_wrapper">
                    <td>
                      <div className="cart_item">
                        <div className="cart_img d-flex align-items-center">
                          <div className="cart_img_box">
                            <img src={`${imgUrl}/product/${item.image}`} alt="" />
                          </div>
                          <div className="cart_img_content">
                            <p>{item.title}</p>
                            <span onClick={()=>removeFromCart(item.id)}>Remove</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product_details_quantity pt-3">
                        <div onClick={()=>quantityMinus(item)} className="minus">
                          <AiOutlineMinus />
                        </div>
                        <div className="input_value">
                          <input disabled type="number" value={item.quantity} />
                        </div>
                        <div onClick={()=> addToCart(item)} className="plus">
                          <AiOutlinePlus />
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="cart_price pt-3">${item.price}</p>
                    </td>
                    <td>
                    <p className="cart_total_price pt-3">${item.price * item.quantity}</p>
                    </td>
                  </tr>)
                  }
                  

                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="order_summary">
              <h3>Order Summary</h3>
              <div className="order_items_price d-flex align-items-center justify-content-between" >
                <p>ITEMS <span>{cartState.items.length}</span></p>
                <p>${
                    price.reduce( (total, current) => total + current,0)
              }</p>
              </div>
              <div className="payments_items">
                <p>Payments Method</p>
                <select name="" id="">
                  <option value="">Cash on delivery</option>
                  <option value="">Visa</option>
                  <option value="">Bkash</option>
                  <option value="">Nagad</option>
                </select>
              </div>
              <div className="total_price d-flex align-items-center justify-content-between">
                <p>Total</p>
                <p>${
                    price.reduce( (total, current) => total + current,0) 
              }</p>
              </div>
              <div className="payment_submit my-2">
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
