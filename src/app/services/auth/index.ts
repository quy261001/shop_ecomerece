import { LoginUserRequestDTO, RegisterUserDTO } from '@/app/types/user'
import { AUTH_API_URL } from '@/common/config'
import { axiosInstance } from '@/libs/axios'

export const authService = {
  loginWithUser: async(input: LoginUserRequestDTO) => {
    const response = await axiosInstance.post<ApiResponseBase, LoginUserRequestDTO>(
      AUTH_API_URL.LOGIN_USER,
      input,
      {
        needsToken: false
      }
    );
    return response.data
  },
  registerUser: async(data: RegisterUserDTO) => {
    const response = await axiosInstance.post<ApiResponseBase, RegisterUserDTO>(
      AUTH_API_URL.REGISTER_USER,
      data,
      {
        needsToken: false
      }
    );
    return response.data
  }
}