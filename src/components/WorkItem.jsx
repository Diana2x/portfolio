import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-300'>
      <li className='mb-10 ml-6'>
        <div className='absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-pink-400 rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-pink-600'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-pink-400'>{duration}</span>
        </p>
        <p className='my-2 text-base font-normal text-gray-600 text-justify'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItem