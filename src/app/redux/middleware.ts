import { Action, MiddlewareAPI, isRejected, isRejectedWithValue } from '@reduxjs/toolkit';
import { isPayloadErrorMessage } from './helpers';

export const rtkQueryErrorLogger = (api: MiddlewareAPI) => (next: any) => (action: Action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  if (isRejected(action)) {
    if (action.error.name === 'CustomError') {
      console.error(action.error.message);
    }
  }

  if (isRejectedWithValue(action)) {
    if (isPayloadErrorMessage(action.payload)) {
      console.error(action.payload.data.error);
    }
  }

  return next(action);
};
