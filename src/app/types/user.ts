export interface LoginUserRequestDTO {
  email: string,
  password: string
}

export interface RegisterUserDTO extends LoginUserRequestDTO {
  name: string,
  phone: number,
  confirmPassword: string
}