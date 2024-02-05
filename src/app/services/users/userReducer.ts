import { UserProfileResponseDTO, UserState } from '@/app/types';

export const defaultState: UserState = {
  currentUser: {} as UserProfileResponseDTO,
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};

const reducers = {};

export default reducers;