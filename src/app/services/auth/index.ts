import { LoginUserRequestDTO, RefreshTokenRequestDTO, RefreshTokenResponseDTO, RegisterUserDTO, UserProfileResponseDTO } from '@/app/types/user'
import { AUTH_API_URL } from '@/common/config'
import { axiosInstance } from '@/libs/axios'

export const authService = {
  loginWithUser: async(input: LoginUserRequestDTO) => {
    const response = await axiosInstance.post<ApiResponseBase<UserProfileResponseDTO>, LoginUserRequestDTO>(
      AUTH_API_URL.LOGIN_USER,
      input,
      {
        needToken: false
      }
    );
    return response.data
  },
  registerUser: async(data: RegisterUserDTO) => {
    const response = await axiosInstance.post<ApiResponseBase<UserProfileResponseDTO>, RegisterUserDTO>(
      AUTH_API_URL.REGISTER_USER,
      data,
      {
        needToken: false
      }
    );
    return response.data
  },

  refreshAccessToken: async (refreshToken: string) => {
    const response = await axiosInstance.request<ApiResponseBase<RefreshTokenResponseDTO>, RefreshTokenRequestDTO>({
      url: AUTH_API_URL.REFRESH_TOKEN,
      method: 'POST',
      needToken: false,
      data: {refreshToken}
    });
    return response.data;
  }

}