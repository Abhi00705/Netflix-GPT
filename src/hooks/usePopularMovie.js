import { options } from "../utils/Helper";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";



const usePopularMovie = async(movieURL, typeOfMovie)=>{
   
    
    const dispatch = useDispatch();
    const fetchData = async (movieURL, typeOfMovie)=>{
        try{
            const response = await fetch(movieURL, options);
            const jsonData = await response.json();
            
            dispatch(typeOfMovie(jsonData.results));
            
           }
           catch(err){
            console.log("Error: ",err.message);
           }
    }
    
    useEffect( ()=>{
        fetchData(movieURL, typeOfMovie);
    },[dispatch])

}
export default usePopularMovie;