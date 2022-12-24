import React,{useContext} from 'react';
import { StateContext } from './StateProvider';
import {Link} from 'react-router-dom'

const MusicItem = ({song}) => {
  const {addItemToDownload} =useContext(StateContext)
  const {title,Artiste,Image}=song
  return (
    <Link to="/download"> <div onClick={()=>addItemToDownload(song)}  className='px-2 w-full sm:w-[70%] sm:ml-40 flex items-center border justify-between'>
       <img className='w-1/4 sm:w-22 h-22 p-2' src={Image} alt=""/>
       <div className='w-3/4 border-x  mx-5'>
        <h1 className='text-sm px-6 text-red-400'>{Artiste}</h1>
       <h1 className='px-6 '>{title}</h1> 
       </div>
    </div></Link> 
  )
}

export default MusicItem