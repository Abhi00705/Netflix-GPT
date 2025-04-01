import React from 'react'
import { useSelector } from 'react-redux'
import VedioContainer from './VedioContainer';

const GptMovieSuggesation = () => {
    const movie = useSelector((item)=>item.gpt.gptTmdbMovie);
    const movieName = useSelector((item)=>item.gpt.gptSuggestedMovie);

    console.log(movie, "Line 8");
    if(!movieName && !movie){
        return null;
    }
  return (
    <div className='absolute z-10  text-white font-bold text-2xl  left-10 top-[50%] justify-center'>
        
       <div className='absolute z-1  text-white font-bold text-2xl bg-black/50 '>
        
       {
            movie?.map((item)=>
            (
              <VedioContainer key={item?.results[0]?.id} title={item?.results[0]?.title} movie={item?.results}/>
            )
            )
        }
       </div>
    </div>
  )
}

export default GptMovieSuggesation