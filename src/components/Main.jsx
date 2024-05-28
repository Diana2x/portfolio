import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import lgbackground from '../assets/lg-bg.png'
import dianaPicture from '../assets/diana.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
      <img className=' w-full h-screen object-cover object-left scale-x-[-1]' src={lgbackground} alt="clouds image background"/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/10 flex'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Diana Cordero</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
          <TypeAnimation
            sequence={[
            'Developer',
            2000, 
            'Designer',
            2000,
            'Tech Enthusiast',
            2000,
            'Learner',
            2000,
         ]}
        wrapper="span"
        speed={40}
        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
        repeat={Infinity}
        />
      </h2>
      <div className='flex justify-between pt-6 max-w-[200px] w-full'>
         <FaTwitter className='cursor-pointer' size={20}/>
         <FaFacebook className='cursor-pointer' size={20}/>
         <FaInstagram  className='cursor-pointer' size={20} />
         <FaLinkedin className='cursor-pointer' size={20}/>
      </div>
      </div>
      <img className='w-[400px] h-[400px]' src={dianaPicture} alt=""/>
      </div>
    </div>
  )
}

export default Main