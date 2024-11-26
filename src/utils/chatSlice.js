import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        data:[]

    },
    reducers:{
        addChat: (state, action) =>{
            if(state.data.length > OFFSET_LIVE_CHAT){
                state.data.shift()
            }
            state.data.push(action.payload)
            
        }
    }
})

export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;