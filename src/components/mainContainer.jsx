import React from 'react';
import Title from './Title';
import { useSelector } from 'react-redux';
import VedioBackground from './VedioBackground';


const MainContainer = () => {
  const movies = useSelector((state) => state.movie?.nowPlayingMovie);
  if(!movies)return;
  const movie = movies[0];
  
  return (
    <div className='w-[95rem] box-border'>
      <Title title={movie?.original_title} overView={movie?.overview}/>
      <VedioBackground id={movie?.id}/>
    </div>
  )
}

export default MainContainer