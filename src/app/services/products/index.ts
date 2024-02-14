import { productApiBuilder } from "./productApi";
import reducers, { defaultState } from "./productReducer";

import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: 'products',
  initialState: defaultState,
  reducers,
  extraReducers: (builder) => {
    productApiBuilder(builder);
  }
})

const extraActions = {
  ...actions
}

export * from './productApi'
export * from './productSelector'
export {reducer as productReducer, extraActions as productActions}