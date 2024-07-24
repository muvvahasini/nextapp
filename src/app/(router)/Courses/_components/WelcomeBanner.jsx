import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex m-1 gap-5 items-center bg-white md:grid-cols-3 p-3'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.LRe6718u0hZImsBF6ApqVgHaHa&pid=Api&P=0&h=180" alt="panda" width={140} className='rounded-full m-0 h-40' />
        <div>
            <h6 className='text-violet-800 font-bold text-{27px}'>Welcome to <span className='text-violet-900 font-extrabold text-{30px}'>MVG Innovations</span> Learning Portal</h6>
            <h1 className='text-gray-500'>Explore, Learn and Build All Real Life Projects.</h1>
        </div>
    </div>
  )
}

export default WelcomeBanner