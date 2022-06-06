import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#0066FF');
  const [linkColor, setLinkColor] = useState('#0066FF');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/' ||
      router.asPath === '/' ||
      router.asPath === '/' ||
      router.asPath === '/'
    ) {
      setNavBg('transparent');
      setLinkColor('#0066FF');
    } else {
      setNavBg('#0066FF');
      setLinkColor('#0066FF');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
     
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#412728]'
          : 'fixed w-full h-20 z-[100] bg-[#412728]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src='public/assets/navLogo.png'
            alt='/'
            width='205'
            height='100'
          />
        </Link>
        <div>
          <ul  className='hidden md:flex text-[#FFFFFF]'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#412728] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image
                  src='https://imgur.com/BXd2V03'
                  width='200'
                  height='155'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg  p-3 cursor-pointer bg-[#6d5b5b]'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-[#FFFFFF]'>
                Lets build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-[#FFFFFF]'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-[#FFFFFF]'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-[#FFFFFF]'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-[#FFFFFF]'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-[#FFFFFF]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#FFFFFF]'>
                Lets Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg  p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#6d5b5b] '>
                <Link href='https://www.linkedin.com/in/yeshwanth-yesh-76b86123a/' >
                <FaLinkedinIn />
                </Link>
                </div>
                <div className='rounded-full shadow-lg  p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#6d5b5b]'>
                <Link href='https://github.com/yeshwanthc'>
                <FaGithub />
              </Link>
              </div>
              <div className='rounded-full shadow-lg  p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#6d5b5b]'>
              <Link href='mailto:yeshwanthnaidu62@gmail.com'>
              <AiOutlineMail />
              </Link>
              </div>
              <div className='rounded-full shadow-lg  p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#6d5b5b]'>
              <Link href='tel:+919550066495'>
              <BsFillPersonLinesFill />
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
