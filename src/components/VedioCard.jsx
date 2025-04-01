import React from 'react'
import {IMG_CDN_URL} from "../utils/Helper"

const VedioCard = ({poster}) => {
    
    if(!poster) return null;
  return (
    <div className='w-48 flex-shrink-0 snap-start'>
       <img src={IMG_CDN_URL+poster} alt="img" className='w-full h-auto'/>
    </div>
  )
}

export default VedioCard