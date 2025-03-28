import React, { useEffect, useState } from 'react'
import { bg_img } from '../utils/Helper';
import { useSelector } from 'react-redux';
import {lang} from "../utils/lang";





const NetflixGpt = () => {
  const[lang1, setLang1] = useState();
 const language = useSelector((state)=>state.lang.langStatus);
// console.log(lang[language].search, "checking");
 
 

 
 
  return (
    <>
    <img src={bg_img} alt="background img" className='absolute' />
   
    <form className='absolute bg-black top-52 left-1/3 p-1 w-1/3'>
      <input 
        type="text" 
        placeholder={lang[language].placeHolder}
        className="bg-white p-2 w-[80%]"
        />
      <button className="bg-purple-800 text-white p-2 w-[20%] ">{lang[language].search}</button>
    </form>
    </>
  )
}

export default NetflixGpt