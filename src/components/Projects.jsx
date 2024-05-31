import React from 'react'
import ProjectItem from './ProjectItem'
import weatherImg from '../assets/weatherapp.png'


const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-gray-800'>Projects</h1>
      <p className='text-justify flex justify-center py-8 text-gray-600'>
      Here are some of the projects I have worked on. Hover over the images to discover more details about each one.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={weatherImg} title="Weather App" language="React JS"/>
        <ProjectItem img={weatherImg} title="Cloud Hosting Website" language="React JS"/>
        <ProjectItem img={weatherImg} title="Conversion App" language="Java"/>
        <ProjectItem img={weatherImg} title="Snake Game" language="Javascript"/>
      </div> 
    </div>
  )
}

export default Projects