import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-6 shadow-md border-b-2 flex justify-between items-center bg-white'>
        <div className="flex items-center gap-2 rounded-md max-w-md p-2 border">
            <Search className="h-6 w-6" />
            <input type="text" placeholder='Search...' className="ml-2 outline-none" />
        </div>
        <div>
            <h2 className='px-3 py-2 rounded-full text-sm bg-primary text-white cursor-pointer hover:bg-secondary transition duration-300 ease-in-out'>
                Join Membership Just for $12.2/Month
            </h2>
        </div>
    </div>
  )
}

export default Header