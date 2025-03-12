import React from 'react'
import {Netflix_logo} from '../utils/Helper'

const Header = () => {
  return (
    <div className='absolute z-10   '>
        <img
            className='w-40 h-25 '   
            src={Netflix_logo}
            alt="Netflix_logo" 
        />
    </div>
  )
}

export default Header;