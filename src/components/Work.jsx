import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2020,
    title: 'Content Creator',
    duration: '2020 - Present',
    details:"lorem ipsum dolor sit amet lorem lorem "
  },
  {
    year: 2017,
    title: 'Google Developer Student Club Lead',
    duration: '3 Years',
    details:"lorem ipsum dolor sit amet lorem lorem "
  },
  {
    year: 2015,
    title: 'Amazon',
    duration: '2 Years',
    details:"lorem ipsum dolor sit amet lorem lorem "
  },
  {
    year: 2013,
    title: 'Facebook',
    duration: '2 Years',
    details:"lorem ipsum dolor sit amet lorem lorem lorem ism dolor sit amet lorem lorem lorem ism lorem ipsum dolor sit amet lorem lorem lorem ism dolor sit amet lorem lorem lorem ism lorem ipsum dolor sit amet lorem lorem lorem ism dolor sit amet lorem lorem lorem ism lorem ipsum dolor sit amet lorem lorem lorem ism dolor sit amet lorem lorem lorem ism  "
  },

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-gray-800 pb-8'>Work</h1>
      {
        data.map((item, idx) => (
          <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}

    </div>
  )
}

export default Work