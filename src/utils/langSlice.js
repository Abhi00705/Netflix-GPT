import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
        langStatus:"eng"
    },
    reducers:{
        setLangStatus:(state, action)=>{
            state.langStatus = action.payload;
        }
    }

})
export const {setLangStatus} = langSlice.actions;
export default langSlice.reducer;