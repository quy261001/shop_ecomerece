export interface ProductCardDTO extends ProductCardDetail{
  id: string;
  data: [];
  totalPage: number;
  total: number;
}
export interface ProductCardDetail {
  _id: string;
  name: string;
  images: Array<string>;
  type: string;
  selled: number;
  colors: Array<string>;
  sizes: Array<string>;
  quantity: number; 
  price: number;
  stock: number;
  reviews: number;
  rating: number;
  description: string;
  discount: number;
}

export interface CategoryCardDTO {
  id: number;
  icon: string;
  name: string;
}

export interface AddCartProduct {
  sizes: string[];
  colors: string[];
  quantity: number;
}

export interface ProductState {
  currentProduct: ProductCardDTO;
  cartProduct: ProductCardDTO[];
  typeProduct: [];
  loading: TLoading;
  currentRequestId: undefined;
  error: null;
}