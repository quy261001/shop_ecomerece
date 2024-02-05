import reducers, { defaultState } from './userReducer';

import { createSlice } from "@reduxjs/toolkit"; 

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers,
  extraReducers: () => {}
})

const extraActions = {
  ...actions
}

export * from './userApi'
export {reducer as userReducer, extraActions as userActions} ;