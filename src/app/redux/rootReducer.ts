'use client'

import { combineReducers } from "@reduxjs/toolkit";
import { userApi, userReducer, productApi, productReducer } from "../services";

export const  rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  products: productReducer,
  [productApi.reducerPath]: productApi.reducer
})

export const rootMiddleware = [userApi.middleware, productApi.middleware];