import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex m-1 gap-5 items-center bg-white round-xl md:grid-cols-3 p-5'>
        <img src="https://cdn.pixabay.com/photo/2023/05/07/04/47/panda-7975538_960_720.png" alt="panda" width={125} className='rounded-full m-0 h-40' />
        <div>
            <h6 className='text-violet-800 font-bold text-{27px}'>Welcome to <span className='text-violet-900 font-extrabold text-{30px}'>MVG Innovations</span> Learning Portal</h6>
            <h1 className='text-gray-500'>Explore, Learn and Build All Real Life Projects.</h1>
        </div>
    </div>
  )
}

export default WelcomeBanner