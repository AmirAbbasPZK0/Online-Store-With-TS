import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";

export const store = configureStore({
    reducer : {
        user : UserReducer,
        cart : CartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch