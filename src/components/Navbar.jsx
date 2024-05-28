import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from 'react-icons/bs';


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {nav  ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a
            href="#main"
            className='w-[75%] flex justify-center gap-3 items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer shadow-pink-300 hover:scale-110 ease-in duration-100'
          >
            <span className='w-[45%] flex justify-end'>
            <AiOutlineHome size={20} />
            </span>
            <span className='flex flex-1 justify-start'>Home</span>
          </a>
          <a
            href="#work"
            className='w-[75%] flex gap-4 items-center rounded-full shadow-lg bg-gray-100 m-2 py-4 cursor-pointer shadow-pink-300 hover:scale-110 ease-in duration-100'
          >
            <span className='w-[45%] flex justify-end'>
            <MdOutlineWorkOutline size={20}  />
            </span>
            <span className='flex flex-1 justify-start'>Work</span>
          </a>
          <a
            href="#projects"
            className='w-[75%] flex gap-4 items-center rounded-full shadow-lg bg-gray-100 m-2 py-4 cursor-pointer shadow-pink-300 hover:scale-110 ease-in duration-100'
          >
            <span className='w-[45%] flex justify-end'>
            <AiOutlineProject size={20}  />
            </span>
            <span className='flex flex-1 justify-start'>Projects</span>
          </a>
          <a
            href="#resume"
            className='w-[75%] flex gap-4 items-center rounded-full shadow-lg bg-gray-100 m-2 py-4 cursor-pointer shadow-pink-300 hover:scale-110 ease-in duration-100'
          >
            <span className='w-[45%] flex justify-end'>
            <BsPerson size={20} />
            </span>
            <span className='flex flex-1 justify-start'>Resume</span>
          </a>
          <a
            href="#contact"
            className='w-[75%] flex gap-4 items-center rounded-full shadow-lg bg-gray-100 m-2 py-4 cursor-pointer shadow-pink-300 hover:scale-110 ease-in duration-100'
            >
            <span className='w-[45%] flex justify-end'>
            <AiOutlineMail size={20} />
            </span>
            <span className='flex flex-1 justify-start'>Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-1/2 transform -translate-y-1/2 z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-pink-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineHome size={20}/>
           </a> 
           <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-pink-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <MdOutlineWorkOutline size={20}/>
           </a> 
           <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-pink-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineProject size={20}/>
           </a> 
           <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-pink-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <BsPerson size={20}/>
           </a> 
           <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-pink-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineMail size={20}/>
           </a> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
