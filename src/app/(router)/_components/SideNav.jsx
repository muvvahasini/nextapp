import React from 'react'
import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'

function sideNav() {
    const menu =[
    {
        id:1,
        name:'All Courses',
        icon:BookOpen 
    },
    {
       id:2,
       name:'Membership',
       icon:BadgeIcon
    },
    {
        id:3,
        name:'Be Instructor',
        icon:GraduationCap
    },
]
  return (
    <div className='bg-white shadow-sm border h-screen'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.97bo1Xlny_FRVoNQPbVNwQHaDQ&pid=Api&rs=1&c=1&qlt=95&h=180' 
        alt="logo" className='p-4 w-45 mr-10'/>
        
        <hr className='mt-0' />
        <div className=''>
         {menu.map((item,index)=>(
            <div key={item.id} className='group flex gap-3 mt-3  p-3 text-[18px] items-center
            text-gray-500 cursor-pointer
            hover:bg-primary
            hover:text-white
            rounded-md
            transition-all ease-in-out duration-200
            '>
                <div className='flex gap-3 ml-6 gruop-hover:animal'>
                    <item.icon/>
                    <h1>{item.name}</h1>
                </div>
            </div>
         ))}
         </div>
    </div>
  )
}

export default sideNav