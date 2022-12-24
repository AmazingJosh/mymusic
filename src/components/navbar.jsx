import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose,AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import {FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const NavBar = () => {
  const [shadow,setShadow]=useState(false)
  const [menu,setMenu]=useState(false)
  const [navbg, setNavbg]=useState('#0000')
  const [link,setLink]=useState('#1f2937')
  const toggle=()=>setMenu(!menu)
  useEffect(() => {
    const handleShadow=()=>{
      window.scrollY>=90 ? setShadow(true):setShadow(false)
    }
    window.addEventListener('scroll',handleShadow)
  
  }, [])
  
 
  return (
    <div className={shadow? ' bg-black sticky top-0 w-full h-20 z-50 shadow-black':'bg-black sticky top-0 w-full h-20 z-50'}>
        <div className='flex justify-between items-center h-full w-full px-2 '>
<Link to="/"><h1 className="text-red-400 font-normal text-3xl sm:text-6xl">AMAZING</h1></Link>
<div className='text-white flex items-center'>
  <ul className='hidden lg:flex md:items-center '>
    <li className='flex mx-4 space-x-8 '>
 <a href="/"> <AiFillHome className='hover:scale-110 ease-in-out' size={35}/></a>
 <a href="https://wa.me/message/DRNZZWQTUD6KK1"><FaWhatsapp className='hover:scale-110 ease-in-out' size={35}/>
 </a>
 <a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09">
<FaTwitter className='hover:scale-110 ease-in-out' size={35}/>
 </a>
 <a href="mailto:theamazingkeyz@gmail.com"> <HiOutlineMail className='hover:scale-110 ease-in-out' size={35}/></a>
 
    </li>
 <li className=" border hover:bg-white hover:text-black border-red-600 hover:ease-in-out hover:duration-500 text-center font-bold text-lg  py-[18px] px-[34px] ml-10  hover:border-b">Lets Connect</li>
 </ul>

 <div onClick={toggle} className='lg:hidden'>
    <AiOutlineMenu size={25}/>
  </div>
</div>
 </div>
 {/** mobile menu */} 
  <div className={menu? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/40':''}>
  <div className={menu? " fixed left-0 top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-red-500 p-10 ease-in duration-500":"fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:[w-45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"}>
    <div className=''>
      <div className='w-full flex items-center justify-between'>
      <h1 className="text-white font-normal text-xl sm:text-4xl ">AMAZING</h1>
      <div onClick={toggle} className='rounded-full  shadow-lg shadow-red-200  p-3 cursor-pointer'>
        <AiOutlineClose  className='sm:w-8 sm:h-8 text-white' />
      </div>
      </div>
      <div className='border-b border-gray-300 my-4'><p className='md:w-[90%] sm:text-3xl p-8 text-white'>Listen and download your favourite songs
      </p>
      </div>
    </div>
    <div className=''>
      <ul className='py-4 flex flex-col'>


        <div className='flex ml-[-4px] justify-around text-white'>
          
<a href="https://wa.me/message/DRNZZWQTUD6KK1"><FaWhatsapp   className='border border-white hover:text-red-600 hover:bg-white sm:w-16 sm:h-16 p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/></a>
<a href="https://twitter.com/theamazingJosh_?t=Fd8bDkjcxRV8G1JQQQH3PQs=09"><FaTwitter className='border border-white hover:text-red-600 hover:bg-white sm:w-16 sm:h-16 p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/>
</a>
<a href="mailto:theamazingkeyz@gmail.com"><HiOutlineMail className='border  border-white hover:text-red-600 hover:bg-white  sm:w-16 sm:h-16 p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/></a>
        </div>

      <li className=" border text-white  hover:bg-white hover:text-red-600 border-white sm:text-4xl hover:ease-in-out hover:duration-500 text-center font-bold text-[#56] text-lg ml-[-20px] py-[10px] px-[20px] mt-10 hover:border-b">Let's Connect</li>


      </ul>
    </div>
  </div>
 </div>
 </div>
  )
}

export default NavBar