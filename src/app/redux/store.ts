import { rootMiddleware, rootReducer } from "./rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "./middleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
      .concat(rtkQueryErrorLogger)
      .concat(rootMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;