import { ProductState, ProductCardDTO } from "@/app/types"

export const defaultState: ProductState = {
  currentProduct: {} as ProductCardDTO,
  typeProduct: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null
}

const reducers = {}

export default reducers;