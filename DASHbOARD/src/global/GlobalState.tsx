import { createSlice } from '@reduxjs/toolkit'

const initialState = {
toggle : false,
user : null || {}
}

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeToggle : (state : any, {payload} : any)=>{
        state.toggle = payload
    },
    createUser : (state : any, {payload} : any ) =>{
      state.user = payload
    },
    logOut : (state : any ) =>{
      state.user = null
    },
  }
});

export const {changeToggle, createUser, logOut} = GlobalState.actions

export default GlobalState.reducer