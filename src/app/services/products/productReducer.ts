import { ProductState, ProductCardDTO } from "@/app/types"

export const defaultState: ProductState = {
  currentProduct: {} as ProductCardDTO,
  loading: 'idle',
  currentRequestId: undefined,
  error: null
}

const reducers = {}

export default reducers;