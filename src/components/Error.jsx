import React from 'react'

const Error = (message) => {
  return (
    <div className='font-bold text-2xl bg-black/50 text-white flex'>
      <div>
        {message}
      </div>
      
    </div>
  )
}

export default Error