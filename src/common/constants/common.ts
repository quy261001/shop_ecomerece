export const PAGE = 0;
export const LIMIT = 10;
export const DEFAULT_PAGINATION = {limit: LIMIT,  page: PAGE };
export const FILE_MAX_SIZE = 20; // 5mb
export const FILE_TYPE_ALLOWED = ['image/png', 'image/jpeg', 'image/jpg'];

export const TOKEN_EXPIRES_IN_SECONDS = 3500; //3500

export const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
export const SPACE_REGEX = /^\S*$/;
export const USERNAME_REGEX = /^[a-zA-Z0-9_]*$/;