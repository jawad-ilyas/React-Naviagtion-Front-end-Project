import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem('theme') || 'dark';

const initialState = {
    themeValue: initialTheme,
}


export const themeSlice = createSlice({


    name: "theme",
    initialState,
    reducers: {
        themeChange: (state, action) => {
            state.themeValue = action.payload;
            localStorage.setItem('theme',action.payload)
        },
        setSystemTheme : (state,action)=>{
            // console.log("into set sysmte theme ",action.payload)
            state.themeValue = action.payload;

        }
    }



})


export const { themeChange  , setSystemTheme} = themeSlice.actions

export default themeSlice.reducer