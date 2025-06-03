import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data));
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='max-w-7xl flex flex-col justify-center'>
        {' '}
        <Slider {...settings} className=''>
          <div>
            <img src='https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg' className='h-150 w-full' />{' '}
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg' className='h-150 w-full' />{' '}
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg' className='h-150 w-full' />{' '}
          </div>
        </Slider>
      </div>
      <div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 m-3 p-3 justify-center items-center'>
          {products.map((i) => {
            return (
              <div key={i.id}>
                <div className='h-40 w-30 p-2 m-2'>
                  <img src={i.image} />
                </div>

                <div className='p-2 m-3'>{i.title}</div>
                <div className='p-2 m-3 text-green-700 font-bold'>
                  {i.price}$
                </div>
                <div>
                  {' '}
                  <Link
                    className='bg-green-900 text-white py-2 px-3 rounded-lg m-2 '
                    to={`DetailsPage/${i.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
