import React from 'react'
import { Template } from '@/types/types'
import Image from 'next/image'

const TemplateCard = (item: Template) => {
  return (
    <div className='p-5 shadow-md rounded-md border flex flex-col gap-3 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className='text-lg font-semibold'>{item.name}</h2>
        <p className='text-xs'>{item.desc}</p> 
    </div>
  )
}

export default TemplateCard