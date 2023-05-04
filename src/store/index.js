import { configureStore, createSlice } from "@reduxjs/toolkit";

const hoverSlice = createSlice({
    name: 'hover',
    initialState: { isHover: false },
    reducers: {
        toggleCard(state) {
            state.isHover = !state.isHover;
        }
    }
})
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

const store = configureStore({
    reducer: {
        hover:hoverSlice.reducer,
        card: cardSlice.reducer
    }
})

export default store;
export const cardActions = cardSlice.actions;
export const hoverActions = hoverSlice.actions;