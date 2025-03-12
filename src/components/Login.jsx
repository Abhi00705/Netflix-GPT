import React from 'react'
import Header from './Header'
import { bg_img } from '../utils/Helper'
import {useState} from 'react'

const Login = () => {
  const[islogin, setlogin] = useState(true);
  return (
    <div>
        <Header/>

        <img src={bg_img} alt="background img" className='absolute ' />

        <div className='relative z-10 mx-auto w-[25rem]  flex flex-col p-10 gap-10 justify-center  bg-gray-950/95 top-40'>
            <h1 className='text-white font-bold text-2xl'>{islogin?"Sign In":"Sing up"}</h1>

            <input type="text" placeholder='Enter emailId...' className='bg-gray-700 p-2 h-12 text-white' />

            <input type="password" placeholder='Password' className='bg-gray-700 p-2 h-12 text-white' />

            {!islogin && <input type="password" placeholder='Re-enter Password' className='bg-gray-700 p-2 h-12 text-white' />}
            
            <button 
                className='font-bold text-white bg-red-700 w-full h-12 py-2 cursor-pointer'
            >{islogin?"Sign In":"Sing up"}</button>

            <p 
              className='text-white cursor-pointer'
              onClick={()=>setlogin((val)=>setlogin(!val))}
            >New on netflix?sign up</p>
        </div>
    </div>
  )
}

export default Login