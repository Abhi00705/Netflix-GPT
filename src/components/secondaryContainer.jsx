import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import VedioContainer from './VedioContainer';
import usePopularMovie from "../hooks/usePopularMovie";
import { popularMovie, upCommingMovie, topRated } from '../utils/Helper';
import { addPopularMovie, addUpCommingMovie, addTopRated } from "../utils/movieSlice";



const SecondaryContainer = () => {
 

  usePopularMovie(popularMovie, addPopularMovie);
  usePopularMovie(upCommingMovie, addUpCommingMovie);
  usePopularMovie(topRated, addTopRated);
  const movies = useSelector((store)=>store.movie);
  return (
   <div className='bg-black w-[95rem]'>
     <div className='relative z-10 mt-[-15rem]'>
        <VedioContainer title={"Now playing"} movie={movies.nowPlayingMovie}/>
        <VedioContainer title={"Popular Movie"} movie={movies.popularMovie}/>
        <VedioContainer title={"Upcomming Movie"} movie={movies.upCommingMovie}/>
        <VedioContainer title={"Top Rated"} movie={movies.topRated}/>
    </div>
   </div>
  )
}

export default SecondaryContainer;