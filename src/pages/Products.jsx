import React from 'react'
import Card from '../components/common/Card'
import useAsync from '../hooks/useAsync';
import ProductServices from '../services/ProductServices';

const Products = () => {
  const { data, isSuccess } = useAsync(ProductServices.getProducts);
  return (
    <div className='products_component'>
      <div className="container">
          <div className="products_banner">
            <h2>Products Page</h2>
          </div>
        <div className="products_card my-5">
            <div className="row g-4">
            {
              isSuccess && data.map( item => <Card key={item.id} product={item} col={3}/>)
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products