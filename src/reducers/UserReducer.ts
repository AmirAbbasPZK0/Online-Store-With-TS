import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../interfaces/types";
import { UserData } from "../interfaces/types";


const initialState : UserState = {
    isLogin : false
}

export const UserReducer = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginHandler : (state , action : PayloadAction<string>)=>{
            state.isLogin = true
            state.userToken = action.payload
        },
        userHandler : (state , action : PayloadAction<UserData>)=>{
            state.userDetails = action.payload
        }
    }
})

export const {loginHandler , userHandler} = UserReducer.actions
export default UserReducer.reducer


