import { useDispatch } from "react-redux";
import { options } from '../utils/Helper'; 
import { addMovie } from '../utils/movieSlice';
import { useEffect } from "react";

const useFetch_API = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
                const jsonRes = await res.json();
                dispatch(addMovie(jsonRes?.results));
                console.log(jsonRes?.results);
            } catch (err) {
                console.error("Failed to fetch data:", err.message);
            }
        };

        fetchData();
    }, [dispatch]);
};
 
  export default useFetch_API;