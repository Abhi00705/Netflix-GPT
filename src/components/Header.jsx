import React, { useEffect, useState } from 'react'
import {Netflix_logo} from '../utils/Helper'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { removeUser, addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((state)=>state.user);
const[logout, setLogout] = useState(false);
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
      console.log(error.message);
    });
    
  }


  return (
    <div className=' absolute z-10  bg-black/50  w-screen '>
        <img
            className='w-40 h-25'   
            src={Netflix_logo}
            alt="Netflix_logo" 
        />
        <h2>{user?.displayName}</h2>
     {
        logout && <button 
          className='absolute top-5 right-5 font-bold text-white border-2 border-white p-3 mt-2 z-12 cursor-pointer '
          onClick={()=>handleClick()}
        >Logout</button>
      }
    </div>
  )
}

export default Header;