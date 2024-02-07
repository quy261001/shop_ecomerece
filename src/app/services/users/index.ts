import { userApiBuilder } from './userApi';
import reducers, { defaultState } from './userReducer';

import { createSlice } from "@reduxjs/toolkit"; 

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers,
  extraReducers: (builder) => {
    userApiBuilder(builder);
  }
})

const extraActions = {
  ...actions
}

export * from './userApi'
export * from './userSelector'
export {reducer as userReducer, extraActions as userActions} ;