import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#412728]'>About</p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2 text-white'>
          I have spent the last 3 years in the company called Nielsen working as a
          Data Analyst and as a freelance Web Developer. I have always had a knack for
          technology and working with computers. In 2020 I started working
          with HTML & CSS to make some minor edits on small business websites when I was working as a freelancer. What I thought was just a few small edits
          turned into a love for programming.
          </p>
          <p className='py-2 text-white'>
          Fascinated with how intricate programming can be I was quickly drawn
          to learn more. I started learning javascript and was even more
          enthused with making websites interactive. I then started
          freelancing for e-commerce companies on the WordPress platform. I am
          now spending my time building projects with React JS , Next Js , and
          learning new technologies.
          </p>
          <Link href='/#projects'><p className='py-2 text-white underline cursor-pointer'>Check out some of my latest projects.</p></Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="/" width='100%' height='100%'/>
        </div>
      </div>
    </div>
  );
};

export default About;
