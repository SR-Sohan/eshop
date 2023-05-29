import React, { useEffect, useState } from 'react'
import ProductServices from '../services/ProductServices';
import useAsync from '../hooks/useAsync';
import { Link } from 'react-router-dom';

const Home = () => {

    const {data,isLoading} = useAsync(ProductServices.getProducts)

    console.log(data);

  return (
    <>
      {/* banner area start  */}
      <div className="banner_area">
        <div className="container">
          <div className="banner_content">
            <h1>Shopping And <br />
            Department Store.</h1>
            <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            <Link>Learn More</Link>
          </div>
        </div>
      </div>
      {/* banner area end  */}
    </>
  )
}

export default Home