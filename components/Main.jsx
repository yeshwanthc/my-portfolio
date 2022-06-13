import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';


const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                      <p className='text-sm tracking-widest text-[#ffffff]'> </p>
                    <h1 className='py-4 text-[#ffffff]'>
                    Hi, Iam <span className='text-[#412728]'>Yeshwanth</span> </h1> 
                    <h1 className='py-2 text-[#ffffff]'>
                    A Front End Web Developer</h1>
                    <p className='py-4 text-[#ffffff] max-w-[70%] m-auto'>

                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#412728]  animate-bounce'>
                    <Link href='https://www.linkedin.com/in/yeshwanth-yesh-76b86123a/' >
                    <FaLinkedinIn />
                    </Link>
                    </div>
                    <div className='rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#412728] hover:animate-bounce'>
                    <Link href='https://github.com/yeshwanthc'>
                    <FaGithub />
                   </Link>
                   </div>
                  <div className='rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#412728] hover:animate-bounce'>
                  <Link href='mailto:yeshwanthnaidu62@gmail.com'>
                  <AiOutlineMail />
                  </Link>
                  </div>
                  <div className='rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#412728] animate-bounce'>
                  <Link href='tel:+919550066495'>
                  <BsFillPersonLinesFill />
                  </Link>
                  </div>
                   
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Main
