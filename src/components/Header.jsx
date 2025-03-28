import React, { useEffect, useState } from 'react'
import {Netflix_logo} from '../utils/Helper'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { removeUser, addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { toggleGpt } from '../utils/gptSlice';
import {setLangStatus} from "../utils/langSlice";
import { LangArr } from '../utils/Helper';
import {lang} from "../utils/lang";


const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const[languageStatus, setlanguageStatus] = useState("eng");
const language = useSelector((state)=>state.lang.langStatus);


useEffect(()=>{
  setlanguageStatus(language);
}, [language]);


  
const[logout, setLogout] = useState(false);

const handleLanguageChange = (event) => {
  const selectedLanguage = event.target.value;
  dispatch(setLangStatus(selectedLanguage));
};


//check the login status
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
         dispatch(addUser({email: user.email, uid:user.uid, displayName:user.displayName, photoURL: user.photoURL}))  
         setLogout(true);
      } else {
        // User is signed out
        dispatch(removeUser());
        setLogout(false);
        navigate("/login");
      }
    });
  },[])

  const handleClick = ()=>{
    signOut(auth).then(() => {
      setLogout(false);
      // Sign-out successful.
      navigate("/login");

    }).catch((error) => {
      // An error happened.
    throw new Error(error.message || "An error occurred during sign-out.");
    });
    
  }
  const handleGptClick = ()=>{

    dispatch(toggleGpt());
  }

  return (
    <div className=' absolute z-10  bg-black/50  w-[95rem] box-border  '>
        <img
            className='w-40 h-25'   
            src={Netflix_logo}
            alt="Netflix_logo" 
        />
        
     {
        logout && 
        <>  
      <div className='absolute top-8.5 right-78  text-white   font-bold  mx-4  '>
        <select name="lang" className='border-none p-2 bg-black/30 rounded-lg' onChange={handleLanguageChange} >
          {
            LangArr.map((item)=><option key={item?.value} value={item?.value} className='bg-black/60 ' >{item?.name}</option>)
          }
          
          
        </select>
      </div>
        <button 
          className='bg-purple-800 absolute top-7 right-40 text-white p-3 rounded-lg font-bold hover:bg-purple-800/80'
          onClick={handleGptClick}
        >{lang[languageStatus]?.netflixGptBtn}</button>
        <button 
          className='absolute top-5 right-5 font-bold text-white border-2 border-white p-3 mt-2 z-12 cursor-pointer '
          onClick={()=>handleClick()}
        >{lang[languageStatus]?.logout}</button>
        
        </>
      }
    </div>
  )
}

export default Header;