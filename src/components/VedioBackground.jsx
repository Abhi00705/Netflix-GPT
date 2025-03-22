import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { options } from '../utils/Helper';
import {addTrailer} from "../utils/movieSlice"

const VedioBackground = ({id}) => {
  
    const dispatch = useDispatch();
    const[trailerKey, setTrailerKey] = useState(null);
    const trailerVedio = useSelector((state)=> state.movie?.trailerMovie);
  
    const searchTrailer = (props)=>{
      const res = props.filter((item)=>item.type === "Trailer");
      return res;
    }
   
    const fetchData = async()=>{
        const res = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", options)
        const jsonData = await res.json();
        const filterData = searchTrailer(jsonData.results);
        const r = filterData.length ? filterData[0]:jsonData.results[0];
        setTrailerKey(r.key);
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <iframe  
        className=' w-screen h-screen '
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        
        ></iframe>
        
        </div>
  )
}

export default VedioBackground