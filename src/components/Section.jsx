import React from 'react';
import { useContext } from 'react';
import { StateContext } from './StateProvider';
import { Link } from 'react-router-dom';
//import { useStateValue } from './StateProvider';
import MusicItem from './MusicItem';


const Section = () => {
  const {songs,addItemToDownload} =useContext(StateContext)
  //console.log("songs",songs)
 
  return (
<div className='px-1 bg-black'>
<ul className=' bg-black flex flex-wrap w-full text-white border  border-red-500 border-b-white '>
            <li className='border mr-2 my-2 sm:p-4  bg-red-500 '>Naija Latest </li>
            <li className='border mr-2 my-2 sm:p-4   bg-red-500 '>Gospel HipHop </li>
            <li className='border mr-2 my-2 sm:p-4   bg-red-500 '>Foreign Songs </li>
            <li className='border mr-2 my-2 sm:p-4   bg-red-500 '>Naija </li>
            <li className='border mr-2 my-2 sm:p-4   bg-red-500 '>Love Songs </li>
            <li className='border mr-2 my-2 sm:p-4  bg-red-500 '>Love Songs </li>
            <li  className='border mr-2 my-2 sm:p-4  bg-red-500 '>Trending </li>
            <li className='border mr-2 my-2 sm:p-4  bg-red-500 '>Naija </li>
        </ul>

    <div className='w-full bg-black  z-[-1]' >
        <div className='w-full  text-white' >
     {songs.map((song)=>(
      <MusicItem key={song.id} song={song} />
      )
        )
     }
    </div>
    </div>
    </div>
    
  )}

export default Section