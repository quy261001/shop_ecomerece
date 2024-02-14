import { UpdateUserDataDTO, UserProfileResponseDTO } from "@/app/types";
import { axiosBaseQuery } from "@/libs/axios";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { set } from 'lodash'
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi ({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getDetailUser: builder.query<UserProfileResponseDTO, string>({
      query: (id) => ({ url: `/user/get-details/${id}`, method: 'GET' }),
      transformResponse:(response: ApiResponseBase<UserProfileResponseDTO>) => response.data,
    }),

    updateUser: builder.mutation<UserProfileResponseDTO, UpdateUserDataDTO>({
      query: ({id, ...data}) => {
        return ({ url: `/user/update-user/${id}`, method: 'PUT', data })
      },
      transformResponse:(response: ApiResponseBase<UserProfileResponseDTO>) => response.data,
    })
  }),
});

export const userApiBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addMatcher(userApi.endpoints.getDetailUser.matchFulfilled, (state, {payload}) => {
    set(state, 'currentUser', payload)
    set(state, 'loading', 'idle')
    set(state, 'currentRequestId', '')
  }) 
}

export const {
  useGetDetailUserQuery,
  useUpdateUserMutation
} = userApi;