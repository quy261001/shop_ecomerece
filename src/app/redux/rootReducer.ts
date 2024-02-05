'use client'

import { combineReducers } from "@reduxjs/toolkit";
import { userApi, userReducer } from "../services";

export const  rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer
})

export const rootMiddleware = [userApi.middleware];