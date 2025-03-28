import React from 'react'
import Header from './Header'
import { bg_img } from '../utils/Helper'
import {useState, useRef, useEffect} from 'react'
import {isValid, signUpValidation} from '../utils/Validation'
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {profile_Img} from "../utils/Helper"
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
  const[islogin, setlogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Email = useRef(null);
  const Password = useRef(null);
  const rePassword = useRef(null);

  useEffect(()=>{
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/auth.user
          navigate("/");
            
        } 
      });
  
    },[])


  const handleSignup=(Email, Password, rePassword)=>{
   
    const validation = signUpValidation(Email.current.value, Password.current.value, rePassword.current.value);
    setErrorMessage( validation);
  
    if(validation !== undefined) return;
    

    // sign-up logic
    createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
      .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        
        
        updateProfile(user, {
        displayName: "Abhishek kumar",
        photoURL: {profile_Img}
    }).then(() => {
      // Profile updated!
     
    }).catch((error) => {
      // An error occurred
      setErrorMessage("fail to update");
     
    });
    
    dispatch(addUser({email: user.email, uid:user.uid, displayName:user.displayName, photoURL: user.photoURL}))
    navigate("/")

      })
      .catch((error) => {
       
        const errorCode = error.code;
       
        const errorMessage = error.message;
        
        setErrorMessage(errorMessage);
    
  });


  }

  const handleSignin=(Email, Password)=>{
    
    const validation = isValid(Email.current.value, Password.current.value);
    setErrorMessage( validation);
    if(validation !== null) return;
  
    //sign-in logic

    signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    dispatch(addUser({email: user.email, uid:user.uid, displayName:user.displayName, photoURL: user.photoURL}))
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    setErrorMessage(errorMessage);
  });


  }
  return (
    <div>
        <Header className="z-1001"/>

        <img src={bg_img} alt="background img" className='absolute ' />

        <div 
          className='relative z-10 mx-auto w-[25rem]  flex flex-col p-10 gap-10 justify-center  bg-gray-950/95 top-40'
          
        >
            <h1 className='text-white font-bold text-2xl'>{islogin?"Sign In":"Sing up"}</h1>

            <form 
              onSubmit={(e)=>e.preventDefault()}
              className='flex flex-col gap-10  '
            >

                  <input  ref={Email} type="text" placeholder='Enter emailId...' className='bg-gray-700 p-2  h-12 text-white' autoComplete="current-password"/>

                  <input ref={Password} type="password" placeholder='Password' className='bg-gray-700 h-12 p-2 text-white' autoComplete="current-password"/>

                  {!islogin && <input ref={rePassword} type="password" placeholder='Re-enter Password' className='bg-gray-700  h-12 text-white' autoComplete="current-password"/>}

                  { errorMessage && (<p className='text-red-800  '>{errorMessage?errorMessage:null}</p>)}
                  <button 

                    className='font-bold text-white bg-red-700 w-full h-12  cursor-pointer'
                    onClick={()=>islogin?handleSignin(Email, Password):handleSignup(Email, Password, rePassword)}
                  
                  >{islogin?"Sign In":"Sign up"}</button>

           </form>

            <p 
              className='text-white cursor-pointer'
              onClick={()=>setlogin((val)=>setlogin(!val))}
            >{islogin?"New on netflix?sign up":"Are you registered?Sign In"}</p>
        </div>
    </div>
  )
}

export default Login