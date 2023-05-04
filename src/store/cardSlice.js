import {createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: 'card',
    initialState:{
        name: '',
        profileImg: '',
        email: '',
    },
    reducers: {
        showCard(state,action) {
            state.name=action.payload.name;
            state.profileImg=action.payload.profileImg;
            state.email=action.payload.email;
        }
    }
})

export default cardSlice.reducer;
export const cardActions = cardSlice.actions;