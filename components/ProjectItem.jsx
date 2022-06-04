import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl bg-white rounded-xl  group hover:bg-gradient-to-r from-[#BFA5A5] to-[#BFA5A5] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>Frontend</p>
        <Link href={projectUrl} target='_blank'>
             <p className='text-center py-4 rounded-md bg-[#412728] text-white font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem