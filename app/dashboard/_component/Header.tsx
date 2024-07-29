import { UserButton } from '@clerk/nextjs'
import Link from "next/link";
import {Github, Linkedin, Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className='p-6 shadow-md border-b-2 flex justify-between items-center bg-white'>
        <div className="flex items-center gap-2 rounded-md max-w-md p-2">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/gatechnologies-suraj" className="flex items-center space-x-2">
            <Github className="w-6 h-6 text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/suraj-kumar-26a611248/" className="flex items-center space-x-2">
            <Linkedin className="w-6 h-6 text-primary" />
          </Link>
          <Link href="https://www.instagram.com/bholi___07" className="flex items-center space-x-2">
            <Instagram className="w-6 h-6 text-primary" />
          </Link>
        </div>
        </div>
        <div className='flex items-center gap-5'>
            <h2 className='px-3 py-2 rounded-full text-sm bg-primary text-white cursor-pointer hover:bg-secondary transition duration-300 ease-in-out'>
                Join Membership Just for $12.2/Month
            </h2>
            <UserButton />
        </div>
    </div>
  )
}

export default Header