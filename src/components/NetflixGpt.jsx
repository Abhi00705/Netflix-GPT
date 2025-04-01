import React, { useEffect, useState, useRef } from 'react'
import { bg_img, options } from '../utils/Helper';
import { useDispatch, useSelector } from 'react-redux';
import {lang} from "../utils/lang";
import {setGptSuggestedMovie, setgptTmdbMovie} from "../utils/gptSlice";
import GptMovieSuggesation from './gptMovieSuggesation';





const NetflixGpt = () => {
  const dispatch = useDispatch();
  const[gptMovie, setGptMovie] = useState([]);
  const gptsugMovie = useSelector((item)=>item.gpt.gptSuggestedMovie);
  const gptTmdbMovieResult = useSelector((item)=>item.gpt.gptTmdbMovie);
  console.log(gptTmdbMovieResult, "line 16");
  const searchText = useRef(null);
  let DEEPSEEK_API_KEY = import.meta.env.VITE_APP_DEEPSEEK_API_KEY;
  if (!DEEPSEEK_API_KEY) {
    console.error("API key is missing. Please set REACT_APP_DEEPSEEK_API_KEY in your .env file.");
  }
 const language = useSelector((state)=>state.lang.langStatus);
 
 const fetchGptMovie = async(getQuery)=>{
  console.log("checking Line 23");
    await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "deepseek/deepseek-r1:free",
      "messages": [
        {
          "role": "user",
          "content": getQuery

        }
      ]
    })
    }).then((data)=>{
      return data.json();
    }).then((jsonData)=>{
      console.log(jsonData);
      const movieData = jsonData.choices[0].message.content.split(", ");
      dispatch(setGptSuggestedMovie(movieData));

    });


   
    
 }
 
 const fetchMovieTMBD = async(movie)=>{
    
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options);
  const jsonData = await res.json();
  return jsonData;


 }

 const handleGPTsearch = async(e)=>{
  e.preventDefault();
  dispatch(setgptTmdbMovie());
  const getQuery = "Act as a Movie Recommendation system and suggest some movies for the query : "+ searchText.current.value+ "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi mil gaya";
  fetchGptMovie(getQuery);
  if(!gptsugMovie){
    throw Error("no data in gptsugMovie");
  }
  const PromisMovieDataTMDB = gptsugMovie.map((movie)=>fetchMovieTMBD(movie));
  const movieDataTMDB = await Promise.all(PromisMovieDataTMDB);
  console.log(movieDataTMDB, "line 70");
  dispatch(setgptTmdbMovie(movieDataTMDB));
  
 }

  return (
    <>
    <img src={bg_img} alt="background img" className=' fixed ' />
   
    <form className='absolute bg-black top-52 left-1/3 p-1 w-1/3'>
      <input 
        ref={searchText}
        type="text" 
        placeholder={lang[language].placeHolder}
        className="bg-white p-2 w-[80%]"
        />
      <button 
        className="bg-purple-800 text-white p-2 w-[20%] "
        onClick={handleGPTsearch}
      >{lang[language].search}</button>
    </form>
    <GptMovieSuggesation/>
    
    </>
  )
}

export default NetflixGpt