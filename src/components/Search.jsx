import React, { useState,useContext } from 'react';
import { FaSearch,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StateContext } from './StateProvider';


const Search = ({placeholder,data}) => {

  const {addItemToDownload} =useContext(StateContext)
  const [filteredSong,setFilteredSong]=useState([])
const [wordEntered,setWordEntered]=useState("")
  function handleFilter(e){
  const searchWord=e.target.value

  const newFilterSong=data.filter((value)=>value.song.toLowerCase().includes(searchWord.toLowerCase()));

  searchWord===""? setFilteredSong([]):setFilteredSong(newFilterSong);
  }

  const handleSearch=()=>{
    //console.log('searched')
  }
  return (
    <div className='search px-2 '>
<div className='search-inputs flex items-center  '>
  <input type="text" placeholder={placeholder}  className="h-10  sm:placeholder:text-xl sm:placeholder:flex  outline-none  text-black  w-full" onChange={handleFilter}/>
  
</div>
{filteredSong.length !==0 &&
<div className='data-result bg-red-600 sm:text-2xl   text-white '>
  {filteredSong.slice(0,5).map((value,key)=>{
    return <div key={value.title} className='  '>
    <Link className="data-item  " to="/download" > <div onClick={()=>addItemToDownload(value)}> <h1 className='active:bg-green-300 hover:bg-white hover:text-red-600'>{value.song}</h1></div></Link>
    
  </div>
 })}
</div>  }


    </div>
  );
}

export default Search