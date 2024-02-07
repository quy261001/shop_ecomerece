export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const AUTH_API_URL = {
  LOGIN_USER: '/user/sign-in',
  REGISTER_USER: '/user/sign-up',
  REFRESH_TOKEN: '/user/refresh-token'
};