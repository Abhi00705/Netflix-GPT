import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptStatus:false,
    },
    reducers:{
        toggleGpt:(state)=>{
            state.gptStatus = !state.gptStatus;
        }
    }
})
export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;