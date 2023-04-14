import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UsersSlice";


const reducer = combineReducers({
    UsersReducer
})

export const store = configureStore({
    reducer
})