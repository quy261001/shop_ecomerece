import axios, {
  AxiosError,
  AxiosInstance as AxiosInstanceType,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse
} from 'axios';

import { API_URL } from '@/common/config';
import { getSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
  needsToken?: boolean;
  _retry?: boolean;
}

class AxiosInstanceClass {
  private axiosInstance: AxiosInstanceType;
  
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        timeout: 30000,
        'device-id': deviceId,
      }
    });

    this.axiosInstance.interceptors.request.use(
      async (config: AdaptAxiosRequestConfig) => {
        config.headers = config.headers ?? {};

        if (config.needsToken) {
          const accessToken = await this.getAccessToken();
          if (accessToken) config.headers.Token = `Bearer ${accessToken}`
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  private async getAccessToken(): Promise<string | null> {
    const session = await getSession();

    if(session) return session.user.accessToken;

    return null
  }

  public async get<T>(
    url: string,
    config?: { needsToken?: boolean } & AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public async post<T, U>(
    url: string,
    data?: U,
    config?: { needsToken?: boolean } & AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config?.needsToken ? config : undefined);
  }

  // add more HTTP methods as need
  public async request<T, U>(
    config: { url: string; data?: U } & ({ needToken?: boolean } & AxiosRequestConfig),
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request<T>({ ...config, url: API_URL + config.url });
  }

  // you can also expose the original Axios instance if needed
  public getOriginalInstance(): AxiosInstanceType {
    return this.axiosInstance;
  }
  
}

export const axiosInstance = new AxiosInstanceClass();