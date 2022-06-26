import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EcoImg from '../public/assets/projects/eco.png';
import UpheedImg from '../public/assets/projects/upheed.png'
import freshIdeasImg from '../public/assets/projects/freshideas.png'
import sixtyNineImg from '../public/assets/projects/6t9th.png'
import ProjectItem from './ProjectItem';
import belezaImg from '../public/assets/projects/beleza.png'
import mishtiImg from '../public/assets/projects/mishti.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full pb-10'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#ffffff]'>
          Projects
        </p>
        <h2 className='py-4'>Websites I Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Eco Claimatic'
            backgroundImg={EcoImg}
            projectUrl='https://ecoclimatic.com/'
          />
           <ProjectItem
            title='Fresh Ideas'
            backgroundImg={freshIdeasImg}
            projectUrl='https://www.freshideastoday.com/'
          />
          <ProjectItem
            title='6t9th.com'
            backgroundImg={sixtyNineImg}
            projectUrl='https://6t9th.com/'
          />
          <ProjectItem
            title='BelezaCrescent'
            backgroundImg={belezaImg}
            projectUrl='https://belezacrescent.com/'
          />
          <ProjectItem
            title='Mishti NRI'
            backgroundImg={mishtiImg}
            projectUrl='https://mishti.io/'
          />
          <ProjectItem
          title='Upheed.com'
          backgroundImg={UpheedImg}
          projectUrl='https://upheed.in/'
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
