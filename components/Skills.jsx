import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#412728]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/K1858lD'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/KhDwUpg'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS3</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/IvGnw23'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://i.imgur.com/xF4OiGn.png'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/bT4yBe7'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/A3au1p1'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next Js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/XgTKeo1'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#412728]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='https://imgur.com/jRfoVqL'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Wordpress</h3>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;
