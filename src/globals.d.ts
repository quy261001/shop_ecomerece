type TLoading = 'idle' | 'loading';

type ActionType = 'add' | 'edit' | 'delete' | 'addMember' | 'move' | 'share' | 'view' | 'template' | 'leave' | 'checked';

type ApiResponseBase<T> = {
  data: T;
  id: string;
  status: string;
  message: string;
  message: string;
  access_token: string;
  refresh_token: string;
};

type ApiError<T> = {
  [key: string]: T;
};

type PaginationMetaData = {
  page: number;
  perPage: number;
  total: number;
};

type Pagination = {
  hasNextPage: boolean;
  nextPage: number | null;
  maxPages: number;
};

type StoreAPIState = {
  requestId: string;
  isSuccess: boolean;
  isError: boolean;
  isFetching: boolean;
};
