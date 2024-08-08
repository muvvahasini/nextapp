"use client"
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CoursesList from './_components/CoursesList'

function Courses() {
  return (
    <div className='bg-slate-50 md:grid-cols-3  h-screen p-3 grid grid-cols-1'>
      <div className='col-span-2'>
         <WelcomeBanner/>
      </div>

      {/*Course List */}
      <CoursesList/>

      <div>
        Right section
      </div>      
  </div>
  )
}
export default Courses