import React from 'react'
import Header from './Header'
import { bg_img } from '../utils/Helper'
import {useState, useRef} from 'react'
import {isValid, signUpValidation} from '../utils/Validation'

const Login = () => {
  const[islogin, setlogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const Email = useRef(null);
  const Password = useRef(null);
  const rePassword = useRef(null);

  const handleSignup=(Email, Password, rePassword)=>{

    const validation = signUpValidation(Email.current.value, Password.current.value, rePassword.current.value);
    setErrorMessage( validation);
  }

  const handleSignin=(Email, Password)=>{
    const validation = isValid(Email.current.value, Password.current.value);
    setErrorMessage( validation);
  }
  return (
    <div>
        <Header/>

        <img src={bg_img} alt="background img" className='absolute ' />

        <div 
          className='relative z-10 mx-auto w-[25rem]  flex flex-col p-10 gap-10 justify-center  bg-gray-950/95 top-40'
          
        >
            <h1 className='text-white font-bold text-2xl'>{islogin?"Sign In":"Sing up"}</h1>

            <form 
              onSubmit={(e)=>e.preventDefault()}
              className='flex flex-col gap-10  '
            >

                  <input  ref={Email} type="text" placeholder='Enter emailId...' className='bg-gray-700 p-2  h-12 text-white' />

                  <input ref={Password} type="password" placeholder='Password' className='bg-gray-700 h-12 p-2 text-white' />

                  {!islogin && <input ref={rePassword} type="password" placeholder='Re-enter Password' className='bg-gray-700  h-12 text-white' />}

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