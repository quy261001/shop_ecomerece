import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { axiosInstance } from "./axiosInstance";

export const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string,
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    headers?: AxiosRequestConfig['headers'];
  },
  unknown,
  unknown
> => 
  async ( 
    { url = '', method, data, params }, 
    { signal },
  ): Promise <{ data?: any; error?: { status?: number; data?: any } }> => {
    try {
      const config = { url, method, data, params, signal };
      const response : AxiosResponse<any> = await axiosInstance.request({
        ...config,
        needToken: true
      })

      return { data: response.data };
    } catch(AxiosError) {
      const err = AxiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        }
      }
    }
  }
