import React, { useEffect, useState } from 'react'
import ProductServices from '../services/ProductServices';
import useAsync from '../hooks/useAsync';

const Home = () => {

    const {data,isLoading} = useAsync(ProductServices.getProducts)

    console.log(data);

  return (
    <div>Home {isLoading && "Loading"}</div>
  )
}

export default Home