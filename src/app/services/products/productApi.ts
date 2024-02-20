import { ProductCardDTO, ProductCardDetail } from "@/app/types";
import { axiosBaseQuery } from "@/libs/axios";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { set } from 'lodash'
import { createApi } from "@reduxjs/toolkit/query/react";
import { getPath } from "@/common/helper";

export const productApi = createApi ({
  reducerPath: 'productApi',
  baseQuery: axiosBaseQuery(),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductCardDTO, Pick<PaginationMetaData, 'page' | 'limit'> | {}>({
      query: (requestParams) => ({ url: getPath(`/product/get-all`, requestParams), method: 'GET' }),
    }),
    getProductDetail: builder.query<ProductCardDetail, string>({
      query: (id) => ({ url: `/product/get-details/${id}`, method: 'GET' }),
      transformResponse:(response: ApiResponseBase<ProductCardDetail>) => response.data
    }),
    getTypeProducts: builder.query<string[], void>({
      query: () => ({url: `/product/get-all-type`, method: 'GET'}),
      transformResponse:(response: ApiResponseBase<string[]>) => response.data
    })
  }),
});

export const productApiBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, {payload}) => {
    set(state, 'currentProduct', payload)
    set(state, 'loading', 'idle')
    set(state, 'currentRequestId', '')
  })
  builder.addMatcher(productApi.endpoints.getTypeProducts.matchFulfilled, (state, {payload}) => {
    set(state, 'typeProduct', payload)
    set(state, 'loading', 'idle')
    set(state, 'currentRequestId', '')
  }) 
}

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetTypeProductsQuery
} = productApi;