import { RootState } from "@/app/redux";
import { ProductCardDTO } from "@/app/types";
import { useSelector } from 'react-redux';

export const useSelectorProduct = ():ProductCardDTO => {
  return useSelector<RootState, ProductCardDTO>((state) => {
    console.log('state', state)
    return state.products.currentProduct
  })
}