import React from 'react';
import Title from './Title';
import { useSelector } from 'react-redux';
import VedioBackground from './VedioBackground';


const MainContainer = () => {
  const movies = useSelector((state) => state.movie?.nowPlayingMovie);
  if(!movies)return;
  const movie = movies[0];
  // console.log(movie);
  return (
    <div>
      <Title title={movie?.original_title} overView={movie?.overview}/>
      <VedioBackground id={movie?.id}/>
    </div>
  )
}

export default MainContainer