import React from 'react'
import VedioCard from './VedioCard'
import Error from "./Error"


const VedioContainer = ({title, movie}) => {
   

    if(!movie || movie.length<=0) return <Error message={"Unable to fetch data!"}/>;
  
    return(
        <>
            <div className=' p-4 w-[90rem] '>
                <h1 className='text-lg p-2 font-bold text-white'>{title}</h1>

                <div className='flex '>
                <div className='flex gap-2 overflow-x-scroll whitespace-nowrap scrollbar-hide snap-x snap-mandatory'>
                    {movie &&
                        movie.map((item)=>(
                            <VedioCard key={item?.id} poster={item?.poster_path}/>
                        ))
                    }
                </div>
                </div>
            </div>

        </>
    )
  
}

export default VedioContainer