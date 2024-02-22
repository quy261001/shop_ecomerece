import { ProductState, ProductCardDTO } from "@/app/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const defaultState: ProductState = {
  currentProduct: {} as ProductCardDTO,
  cartProduct:
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined" &&
    localStorage.getItem("cartProduct")
      ? JSON.parse(localStorage.getItem("cartProduct")!)
      : [],
  typeProduct: [],
  loading: "idle",
  currentRequestId: undefined,
  error: null,
};

const reducers = {
  addCart: (state: ProductState, { payload }: PayloadAction<any>) => {
    const itemIndex = state.cartProduct.findIndex(
      (item) => item._id === payload._id
    );
    console.log("itemIndex", itemIndex);
    if (itemIndex >= 0) {
      // Tăng số lượng sản phẩm hiện có trong giỏ hàng
      state.cartProduct[itemIndex].quantity += payload.quantity;

      if (payload.sizes && payload.sizes[0] !== '') {
        payload.sizes.forEach((newSize: string) => {
          state.cartProduct[itemIndex].sizes.push(newSize);
        });
      }

      if (payload.colors && payload.colors[0] !== '') {
        payload.colors.forEach((newColor: string) => {
          state.cartProduct[itemIndex].colors.push(newColor);
        });
      }
    } else {
      state.cartProduct.push(payload);
    }
    localStorage.setItem("cartProduct", JSON.stringify(state.cartProduct));
  },
};

export default reducers;
