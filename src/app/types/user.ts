export interface LoginUserRequestDTO {
  email: string,
  password: string
}

export interface RegisterUserDTO extends LoginUserRequestDTO {
  name: string,
  phone: number,
  confirmPassword: string
}

export interface UserProfileResponseDTO {
  id: string,
  name: string,
  email: string,
  isAdmin: boolean,
  phone: number,
  address: string,
  avatar: string,
  city: string
}

export interface UserState {
  currentUser: UserProfileResponseDTO,
  loading: TLoading,
  currentRequestId: undefined;
  error: null;
}