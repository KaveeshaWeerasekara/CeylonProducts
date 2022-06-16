import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

//Export Quic Tiles

function TilesDash() {
  const [orderCount, setOrderCount] = useState(0)
  const [userCount, setUserCount] = useState(0)
  useEffect(() => {
    getOrderCount()
    getNewUserCout()
  }, [])

  const getOrderCount = async () => {
    await axios
      .get('http://localhost:5000/api/orderdata/getOrderCount')
      .then((res) => {
        console.log(res)
        setOrderCount(res.data.noOrder)
      })
      .then((err) => {
        console.log(err)
      })
  }

  const getNewUserCout = async () => {
    await axios
      .get('http://localhost:5000/api/users/getnewusers')
      .then((res) => {
        console.log(res)
        setUserCount(res.data.noNewUsers)
      })
      .then((err) => {
        console.log(err)
      })
  }

  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        <div className=' bg-gray-800  shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl'>
          <div className='p-4 bg-gray-700 rounded'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-truck-delivery'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <circle cx='7' cy='17' r='2' />
              <circle cx='17' cy='17' r='2' />
              <path d='M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5' />
              <line x1='3' y1='9' x2='7' y2='9' />
            </svg>
          </div>
          <div className='ml-6'>
            <h3 className='mb-1 leading-5 text-gray-100 font-bold text-2xl'>
              {orderCount}
            </h3>
            <p className='text-gray-400 text-sm tracking-normal font-normal leading-5'>
              All Orders
            </p>
          </div>
        </div>
        <div className='bg-gray-800 shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl'>
          <div className='p-4 bg-gray-700 rounded text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-user-plus'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <circle cx='9' cy='7' r='4' />
              <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
              <path d='M16 11h6m-3 -3v6' />
            </svg>
          </div>
          <div className='ml-6'>
            <h3 className='mb-1 leading-5 text-gray-100 font-bold text-2xl'>
              {userCount}
            </h3>
            <p className='text-gray-400 text-sm tracking-normal font-normal leading-5'>
              New Users
            </p>
          </div>
        </div>
        <div className='bg-gray-800 shadow px-8 py-6 flex items-center  rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl'>
          <div className='p-4 bg-gray-700 rounded text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-user-search'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <circle cx='12' cy='7' r='4' />
              <path d='M6 21v-2a4 4 0 0 1 4 -4h1' />
              <circle cx='16.5' cy='17.5' r='2.5' />
              <path d='M18.5 19.5l2.5 2.5' />
            </svg>
          </div>
          <div className='ml-6'>
            <h3 className='mb-1 leading-5 text-gray-100 font-bold text-2xl'>
              8
            </h3>
            <p className='text-gray-400 text-sm tracking-normal font-normal leading-5'>
              New Requests
            </p>
          </div>
        </div>
        <div className='bg-gray-800 shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl'>
          <div className='p-4 bg-gray-700 rounded text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='icon icon-tabler icon-tabler-discount-2'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <line x1='9' y1='15' x2='15' y2='9' />
              <circle cx='9.5' cy='9.5' r='.5' fill='currentColor' />
              <circle cx='14.5' cy='14.5' r='.5' fill='currentColor' />
              <path d='M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1' />
            </svg>
          </div>
          <div className='ml-6 '>
            <h3 className='mb-1 leading-5 text-gray-100 font-bold text-2xl'>
              $321
            </h3>
            <p className='text-gray-400 text-sm tracking-normal font-normal leading-5'>
              Monthly Earning
            </p>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  )
}
export default TilesDash
