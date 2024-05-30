import React from 'react'
import '../index.css'

const ProjectItem = ({img, title, language}) => {
  return (
    <div className='relative flex items-center justify-end h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-pink-400'>
      <img src={img} alt="" className='fixed-size-img rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-gray-800 tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-gray-800 text-center font-bold'>{language}</p>
        <a href='/'>
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More info</p>
        </a>
      
      </div>
    </div>
  )
}

export default ProjectItem