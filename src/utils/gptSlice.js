import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus:false,
        gptSuggestedMovie: null,
        gptTmdbMovie:null
    },
    reducers:{
        toggleGpt:(state)=>{
            state.gptStatus = !state.gptStatus;
        },
        setGptSuggestedMovie:(state, action)=>{
            state.gptSuggestedMovie = action.payload;
        },
        setgptTmdbMovie:(state, action)=>{
            state.gptTmdbMovie =  action.payload;
        },
        freegptTmdbMovie: (state)=>{
            state.gptTmdbMovie = null;
        }
    }
})
export const {toggleGpt, setGptSuggestedMovie, setgptTmdbMovie, freegptTmdbMovie} = gptSlice.actions;
export default gptSlice.reducer;