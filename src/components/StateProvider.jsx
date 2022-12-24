import React, { createContext, useContext, useState } from "react";


import {Data} from "../DATA";


const addSongs=(download, addItemToDownload)=>{
return [download,{...addItemToDownload}]
}

// Prepares the dataLayer
export const StateContext = createContext({
  songs:[],
  download:[],
  addItemToCart:()=>{},
  
  

});

// Wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [songs]=useState(Data);
  const [download,SetDownload]=useState([]);
  const addItemToDownload=(songToAdd)=>{
SetDownload(addSongs(download,songToAdd))
  }
  const value={songs,addItemToDownload,download}
  return(
    <StateContext.Provider value={value}>
    {children}
  </StateContext.Provider>
  )
  
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
