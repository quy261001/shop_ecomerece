"use client";

import { ProductCardDTO, AddCartProduct } from "@/app/types";
import { Image, Rate, Flex, Button } from "antd";
import { Icon } from "..";
import { useState } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/app/redux/hooks";
import { productActions } from "@/app/services";
import { MESSAGE, useApp, useIsAuthenticated } from "@/common";
import { ModalIsAuth } from "@/app/components/auth";

interface ProductCardProps {
  dataProduct: ProductCardDTO;
}

export function ProductCard({ dataProduct }: ProductCardProps) {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const { isAuthenticated } = useIsAuthenticated();
  const { notification } = useApp()
  const dispatch = useAppDispatch();
  const addCartProduct = () => {
    const product: AddCartProduct = {
      ...dataProduct,
      sizes: [dataProduct.sizes[0] || ''],
      colors: [dataProduct.colors[0] || ''],
      quantity: 1
    }
    if(isAuthenticated && product) {
      dispatch(productActions.addCart(product));
      notification.success({ message: MESSAGE.ADDPRODUCT_SUCCESS });
    } else {
      setIsShowModal(true);
    }
  }
  const discountPercentage = (
    ((dataProduct.price - dataProduct.discount) / dataProduct.price) *
    100
  ).toFixed(2);
  const handlePreviewClick = () => {
    setPreviewVisible(true);
  };

  const handleCancelPreview = () => {
    setPreviewVisible(false);
  };
  return (
    <div className="max-w-[246px] relative p-[10px] transition-all cursor-pointer hover:scale-100 hover:shadow-gray">
      <Link href={`/products/${dataProduct._id}`}>
        <span className="absolute w-[55px] h-[26px] z-30 top-[12px] left-[1.75rem] bg-custom flex justify-center items-center text-white rounded text-xs">
          {discountPercentage}%
        </span>
        <div
          onClick={handlePreviewClick}
          className=" absolute z-30 top-[12px] right-[1.75rem] flex justify-center items-center "
        >
          <Icon
            name="group"
            type="svg"
            width={24}
            height={24}
            className="hover:scale-150 transition-all"
          />
        </div>
        <Image
          preview={{
            visible: isPreviewVisible,
            onVisibleChange: handleCancelPreview,
          }}
          className="w-full h-[210px] transition-all object-contain rounded-md flex justify-center [&_.ant-image-mask]:hover:opacity-0"
          src={dataProduct.images[0]}
          alt={dataProduct.name}
        />
        <Flex className="mt-1" gap={8} vertical>
          <Flex align="center" justify="space-between">
            <p className="text-base font-medium text-gray-180 line-clamp-2">{dataProduct.name}</p>
            <Icon
              name="wishlist"
              type="svg"
              width={24}
              height={24}
              className="hover:scale-150 transition-all"
            />
          </Flex>
          <p className="text-base font-medium mb-2 text-custom">
            ${dataProduct.discount}
            <span className="text-gray-800 line-through pl-3">
              ${dataProduct.price}
            </span>
          </p>

          <Flex align="center" gap={8}>
            <Rate
              className="text-[16px]"
              disabled
              allowHalf
              defaultValue={dataProduct.rating}
            />
            <span className="text-gray-180">({dataProduct.reviews})</span>
          </Flex>
        </Flex>
      </Link>
        <Button onClick={() => addCartProduct()} className="w-full bg-[#DB4444] h-10 mt-4 hover:text-white hover:border-[#DB4444]">
          Add To Cart
        </Button>
        {isShowModal && (
          <ModalIsAuth open={isShowModal} onCancel={() => setIsShowModal(false)} />
        )}
    </div>
  );
}
