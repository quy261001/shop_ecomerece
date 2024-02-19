import { PAGE, LIMIT } from "../constants/common";

export const getPath = (
  prefix: string,
  { page, limit, filter }: Pick<PaginationMetaData, 'page' | 'limit'> | any,
) => {
  let queryParams = {} as any ;
  if((page !== undefined && limit !== undefined)) {
    queryParams = new URLSearchParams({
      page: `${page || PAGE}`,
      limit: `${limit || LIMIT}`,
    });
    if(filter && filter !=='all') {
      queryParams.set('filter', `type&filter=${filter}`)
    }
  }
  else {
    queryParams = new URLSearchParams({});
  }
  return `${prefix}?${decodeURIComponent(queryParams.toString())}`;
};

/**
 * Calculates the expiration time based on the current time and the given expire time.
 *
 * @param {number} expireTime - The expire time in seconds.
 * @return {number} The expiration time in milliseconds.
 */
export const getExpiresIn = (expireTime = 60) => {
  return new Date().setTime(new Date().getTime() + expireTime * 1000);
};
