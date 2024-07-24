import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 bg-white flex justify-between'>
      <div className='flex gap-2 border rounded-md p-2 items-center'>
      <Search/>
      <input type="text" placeholder='search...' className='outline-none' />
      </div>
      <div className='flex m-2 items-center gap-4'>
        <BellDot className='text-gray-500 '/>
        <Button>Get started</Button>
      </div>
    </div>
  )
}

export default Header