import React from 'react'
import Card from '../components/common/Card'

const Products = () => {
  return (
    <div className='products_component'>
      <div className="container">
          <div className="products_banner">
            <h2>Products Page</h2>
          </div>
        <div className="products_card my-5">
            <div className="row g-4">
              <Card col={4}/>
              <Card col={4}/>
              <Card col={4}/>
              <Card col={4}/>
              <Card col={4}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products