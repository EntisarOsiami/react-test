import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';

function Navbar() {
  const token = JSON.parse(localStorage.getItem('token'));
  let isLoggedin = false;
  if (token) {
    isLoggedin = true;
  }
  const user = JSON.parse(localStorage.getItem('user'));
  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
      <nav class='bg-white border-gray-200 dark:bg-gray-900'>
        <div class='max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='/' class='flex items-center space-x-3'>
            <img src='/Amazon-Logo.png' class='h-8 text-white' />
          </a>
          <div class='flex md:order-2'>
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              class='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </button>
            <div class='relative hidden md:block'>
              <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  class='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span class='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                class='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-search'
              aria-expanded='false'>
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'>
            <div class='relative mt-3 md:hidden'>
              <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  class='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='search-navbar'
                class='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </nav>

      <nav className='p-4 w-full bg-[#232f3e] flex gap-3 items-center justify-between'>
        <div className=''>
          <ul className='flex gap-3 items-center justify-center text-white'>
            <li>
              <RxHamburgerMenu />
            </li>
            <li>Today's Deals</li>
            <li>Registry</li>
            <li>Prime Video</li>
            <li>Gift Card</li>
            <li>Customer Services</li>
            <li>sell</li>
          </ul>
        </div>
        <div>
          {isLoggedin ? (
            <div className='flex gap-3 items-center justify-center'>
              <p className='text-white '>
                Hello <span className='text-amber-300'>{user.username}</span>{' '}
              </p>
              <button
                className='text-white py-2 px-3 rounded-lg m-2 bg-red-600'
                onClick={logout}>
                Logout
              </button>
              <Link
                className='text-white py-2 px-3 rounded-lg m-2 bg-green-600'
                to={`/cart/${user.id}`}>
                Cart
              </Link>
            </div>
          ) : (
            <div className='flex gap-3 text-white'>
              <Link
                className='text-white py-2 px-3 rounded-lg m-2 bg-green-600'
                to={'/login'}>
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
