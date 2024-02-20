export interface LoginUserRequestDTO {
  email: string,
  password: string
}

export interface LoginResponseDTO {
  token: string;
  refreshToken: string;
}

export interface RegisterUserDTO extends LoginUserRequestDTO {
  name: string,
  phone: number,
  confirmPassword: string
}

export interface RefreshTokenRequestDTO extends Pick<LoginResponseDTO, 'refreshToken'> {}
export interface RefreshTokenResponseDTO extends LoginResponseDTO {}
export interface UserProfileResponseDTO {
  _id: string,
  name: string,
  email: string,
  isAdmin: boolean,
  phone: number,
  address: string,
  avatar: string,
  city: string
}

export interface UpdateUserDataDTO {
  id: string;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  phone?: number;
  address?: string;
  avatar?: string;
  city?: string;
}

export interface UserState {
  currentUser: UserProfileResponseDTO;
  loading: TLoading;
  currentRequestId: undefined;
  error: null;
}

export interface ProfileItem {
  id: number;
  label: string;
  title: "name" | "email" | "phone" | "address" | "city";
}

export interface ContactItem {
  id: number;
  label: string;
  title: "name" | "email" | "phone" | "message";
}