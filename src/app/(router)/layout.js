import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
function layout({children}) {
  return (
    <div>
        <div className='sm-block w-64 fixed'>
        <SideNav/>
        </div>
        <div className='ml-64'>
          <Header/>
        {children}
        </div>
    </div>
  )
}

export default layout