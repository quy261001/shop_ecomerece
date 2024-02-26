'use client'

import { RootState } from "@/app/redux";
import { ProductCardDTO, ProductCardDetail } from "@/app/types";
import { useSelector } from 'react-redux';

export const useSelectorProduct = ():ProductCardDTO[] => {
  return useSelector<RootState, ProductCardDTO[]>((state) => {
    return state.products.currentProduct.data
  })
}

export const useSelectorProductType = ():string[] => {
  return useSelector<RootState, string[]>((state) => {
    return state.products.typeProduct
  })
}

export const useSelectorCartProduct = (): ProductCardDetail[] => {
  return useSelector<RootState, ProductCardDetail[]>((state) => {
    return state.products.cartProduct
  })
}