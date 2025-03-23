import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailerMovie:null,
        popularMovie:null,
        upCommingMovie:null,
        topRated:null,
    },
    reducers:{
        addMovie:(state, action)=>{
            state.nowPlayingMovie = action.payload; 
        },
        addTrailer:(state, action)=>{
            state.trailerMovie = action.payload;
        },
        addPopularMovie:(state, action)=>{
            state.popularMovie = action.payload;
        },
        addUpCommingMovie:(state, action)=>{
            state.upCommingMovie = action.payload;
        },
        addTopRated:(state, action)=>{
            state.topRated = action.payload;
        },
    }
})

export const {addMovie, addTrailer, addPopularMovie, addUpCommingMovie, addTopRated} = movieSlice.actions;
export default movieSlice.reducer;