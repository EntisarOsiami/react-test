import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function DetailsPage() {
  const { id } = useParams();

  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProducts(response.data));
  }, []);

  console.log(products);

  return (
    <div className='max-w-3xl flex flex-col justify-center items-center mx-auto'>
      <div key={products.id} className='grid grid-cols-2 gap-2 p-3'>
        <div className='flex flex-col justify-center items-center'>
          <img src={products.image} className='h-90 w-full' />
          <p className='text-2xl text-green-700'>{products.price}$</p>
        </div>

        <div className='p-2 text-lg text-start justify-center flex flex-col'>
          <div className='font-bold mb-3 p-2 text-2xl'>{products.title}</div>

          <p className='font-semibold mb-2 p-2'>{products.description}</p>
          <p className='text-md'>{products.category}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
