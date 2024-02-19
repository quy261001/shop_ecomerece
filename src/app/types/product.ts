export interface ProductCardDTO {
  id: number;
  name: string;
  images: string;
  type: string;
  price: number;
  stock: number;
  reviews: number;
  rating: number;
  description: string;
  discount: number;
  data: [];
  totalPage: number;
  total: number;
}

export interface CategoryCardDTO {
  id: number;
  icon: string;
  name: string;
}

export interface ProductState {
  currentProduct: ProductCardDTO;
  typeProduct: [];
  loading: TLoading;
  currentRequestId: undefined;
  error: null;
}