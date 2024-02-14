import { ProductCardDTO } from "@/app/types";
import { axiosBaseQuery } from "@/libs/axios";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { set } from 'lodash'
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi ({
  reducerPath: 'productApi',
  baseQuery: axiosBaseQuery(),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductCardDTO, void>({
      query: () => ({ url: `/product/get-all`, method: 'GET' }),
      transformResponse:(response: ApiResponseBase<ProductCardDTO>) => response.data,
    }),

  }),
});

export const productApiBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, {payload}) => {
    set(state, 'currentProduct', payload)
    set(state, 'loading', 'idle')
    set(state, 'currentRequestId', '')
  }) 
}

export const {
  useGetProductsQuery
} = productApi;