export interface ProductCardDTO {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
  countInStock: number;
  rating: number;
  description: string;
  discount: number;
}
export interface CategoryCardDTO {
  id: number;
  icon: string;
  name: string;
}

export interface ProductState {
  currentProduct: ProductCardDTO;
  loading: TLoading;
  currentRequestId: undefined;
  error: null;
}