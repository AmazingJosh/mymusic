import React from 'react'
//import Song from './Song'
import { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StateContext } from './StateProvider';


const Download = () => {
const {download}=useContext(StateContext)
//console.log(download)
  return (
    <div className='absolute z-[-1] -mt-16 md:w-[30%] h-[30%] px-2'>
{download.map((item,id)=>(
  <div key={id}>
      <img src={item.Image} alt="" />
    <h1 className='text-red-600'>{item.title}</h1>
    <p>{item.description}</p>
    <audio controls>{item.music}</audio>
  </div>
  
))}
<div className='flex items-center justify-center p-4'>
<Link to="/"><button className='p-4 rounded-lg bg-red-900 flex  text-white'>Go back Home <FaHome className='flex mt-1 justify-center items-center'/></button></Link>

</div>

    </div>
  )
}

export default Download